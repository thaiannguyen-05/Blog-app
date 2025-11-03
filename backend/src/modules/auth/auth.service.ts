import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { hash, verify } from 'argon2';
import { Request, Response } from 'express';
import { ExmailProducerService } from 'src/email/email.producer';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomCacheService } from '../custom-cache/customCache.service';
import { AUTH_CONSTANTS } from './auth.constant';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { RegisterDto } from './dto/register.dto';
import { TokenService } from './token.service';
import { Session } from 'prisma/generated/prisma';
import { LoginDto } from './dto/login.dto';
import { SoftDeleteAccountDto } from './dto/softDeleteAccount.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly tokenService: TokenService,
    private readonly emailProducer: ExmailProducerService,
    private readonly customCacheService: CustomCacheService,
  ) {}

  // hashing password
  public async hasing(password: string) {
    return await hash(password);
  }

  // get more infor user
  private getClientInfo(req: Request) {
    // Fastest IP extraction with fallback chain
    const ip =
      req.ip ||
      req.socket.remoteAddress ||
      req.connection.remoteAddress ||
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      (req.headers['x-real-ip'] as string) ||
      'unknown';

    // Fastest User-Agent extraction
    const userAgent = req.headers['user-agent'] || 'unknown';

    return { ip, userAgent };
  }

  // check ip or userAgentId
  async checkIpOrUserAgentId(userAgent: string, ip: string, email: string, session: Session) {
    if (userAgent != session.userAgent || ip != session.userIp) {
      await this.emailProducer.sendDetectDevice({
        to: email,
        userAgent: userAgent,
        userIp: ip,
      });
    }
  }

  // verify account with accesstoken
  public async validate(accessToken: string) {
    try {
      // get id in payload
      const payload = await this.jwtService.verifyAsync(accessToken, {
        secret: this.configService.getOrThrow<string>('JWT_SECRET'),
      });

      // find user
      const exitingUser = await this.prismaService.user.findUnique({
        where: { id: payload.sub },
      });

      if (!exitingUser) throw new NotFoundException('User not found');

      return exitingUser;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      throw new UnauthorizedException('Invalid or expired access token');
    }
  }

  // register
  public async register(data: RegisterDto) {
    // 1.check available account
    const availableAccount = await this.prismaService.user.findFirst({
      where: {
        OR: [{ email: data.email }, { userName: data.userName }],
      },
    });

    if (availableAccount) throw new BadRequestException('Email or UserName is used');

    // 2.hahsing password
    const hashingPassword = await this.hasing(data.password);

    // 3.create account
    const newAccount = await this.prismaService.user.create({
      data: {
        userName: data.userName,
        email: data.email,
        hashingPassword: hashingPassword,
      },
      omit: { hashingPassword: false },
    });

    // 4.cache account
    await this.customCacheService.fallBackCacheTemporaryObject(`account:${data.email}`);

    const verifyLink = `http://localhost:4000/auth/verify-account?email=${data.email}`;
    // 5.send email nofification verify account
    await this.emailProducer.sendNotificationRegister({
      to: newAccount.email,
      verifyLink,
    });

    return {
      success: true,
      message: 'Verification email sent. Please check your inbox.',
      user: {
        id: newAccount.id,
        userName: newAccount.userName,
        name: newAccount.name,
        email: newAccount.email,
      },
    };
  }

  // verify account
  public async verifyAccount(email: string, res: Response) {
    // 1.check available account
    const availableAccount = await this.customCacheService.getUserInCache(email);

    if (!availableAccount) throw new NotFoundException('Account is not exiting');

    if (availableAccount.isActive) throw new BadRequestException('Account already exited');

    // 2.del cached
    await this.cacheManager.del(`account:${email}`);

    // 3.update account
    const newAccount = await this.prismaService.user.update({
      where: { email: email },
      data: { isActive: true },
      omit: { hashingPassword: false },
    });

    // 4.update cache
    const key = AUTH_CONSTANTS.CACHE_KEY.KeyUserWithEmail(email);
    await this.customCacheService.updateCache(key, newAccount);

    return res.send(`
            <html>
              <head><title>Verify Success</title></head>
              <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
                <h2 style="color: green">Email verified successfully!</h2>
                <p>You can now login to your account.</p>
              </body>
            </html>
          `);
  }

  // delete soft account by email
  public async deleteAccountByEmail(data: SoftDeleteAccountDto) {
    // check availableAccount
    const availableAccount = await this.customCacheService.getUserInCache(data.email);

    if (!availableAccount) throw new NotFoundException('Account is not exiting');

    // del cache
    await this.cacheManager.del(`account:${data.email}`);

    // validate password
    const isMatched = verify(availableAccount.hashingPassword, data.password);
    if (!isMatched) {
      throw new BadRequestException('Password is not corrected');
    }

    // delete account from database
    await this.prismaService.user.update({
      where: { email: data.email },
      data: { deleteAt: new Date() },
    });

    return {
      success: true,
    };
  }

  // create session
  public async createSession(
    user: { id: string; email: string },
    res: Response,
    ip: string,
    userAgent: string,
  ) {
    // 1.generate token
    const tokens = await this.tokenService.generateTokens(user.id, user.email);

    // 2.hashing refresh token
    const hashRefreshToken = await this.hasing(tokens.refreshToken);

    // 3. get session id
    const sid = res.req.cookies?.session_id;

    // 4. store tokens
    const session = await this.tokenService.storeTokens(
      user.id,
      user.email,
      hashRefreshToken,
      ip,
      userAgent,
      sid,
    );

    // 5. set maxage
    res
      .cookie('session_id', session.id, {
        maxAge: AUTH_CONSTANTS.TIME_LIFE_SESSION,
        ...AUTH_CONSTANTS.COOKIE_CONFIG,
      })
      .cookie('access_token', tokens.accessToken, {
        maxAge: AUTH_CONSTANTS.TIME_LIFE_ACCESS_TOKEN,
        ...AUTH_CONSTANTS.COOKIE_CONFIG,
      })
      .cookie('refresh_token', tokens.refreshToken, {
        maxAge: AUTH_CONSTANTS.TIME_LIFE_REFRESH_TOKEN,
        ...AUTH_CONSTANTS.COOKIE_CONFIG,
      });

    return { session, tokens };
  }

  // login
  public async login(data: LoginDto, res: Response) {
    // 1.check available user / login with userName or email
    const availableAccount = await this.prismaService.user.findFirst({
      where: {
        OR: [{ userName: data.accessor }, { email: data.accessor }],
      },
      omit: { hashingPassword: false },
    });

    if (!availableAccount) throw new NotFoundException('Acount is not existing');

    if (!availableAccount.isActive) {
      const verifyLink = `http://localhost:4000/auth/verify-account?email=${availableAccount.email}`;

      await this.emailProducer.sendNotificationRegister({
        to: availableAccount.email,
        verifyLink,
      });
      throw new ForbiddenException(
        'Account is not verified. Please check your email to verify your account.',
      );
    }

    // 2.verify password
    const isMatch = await verify(availableAccount.hashingPassword, data.password);

    if (!isMatch) throw new UnauthorizedException('Password is not match');

    // 3.user ip and agent
    const hardWareUser = this.getClientInfo(res.req);
    // 4.create session
    const session = await this.createSession(
      availableAccount,
      res,
      hardWareUser.ip,
      hardWareUser.userAgent,
    );

    // recover account if account has been deleted
    if (availableAccount.deleteAt) {
      await this.prismaService.user.update({
        where: { id: availableAccount.id },
        data: { deleteAt: null },
      });
    }

    const { hashingPassword, ...userWithoutPassword } = availableAccount;

    return {
      message: 'Login successful',
      data: userWithoutPassword,
      '@accessToken': session.tokens.accessToken,
      '@refreshToken': session.tokens.refreshToken,
      '@sessionId': session.session.id,
    };
  }

  // logout
  public async logout(res: Response, sesisonId?: string) {
    // get sessionId in the req
    const sid = res.req.cookies?.session_id || sesisonId;

    if (!sid) throw new ConflictException('Session is not require');

    try {
      // clear refreshtoken
      await this.prismaService.session.update({
        where: { id: sid },
        data: { hashingRefreshToken: null },
      });
    } catch (error) {
      console.error('Error clearing session', error);
    }

    // clear accesstoken and refreshtoken
    res
      .clearCookie('access_token', { path: '/' })
      .clearCookie('refresh_token', { path: '/' })
      .clearCookie('session_id', { path: '/' });
    return {
      message: 'Done',
      data: null,
    };
  }

  // change password
  public async changePassword(req: Request, data: ChangePasswordDto) {
    // check available account
    const availableAccount = await this.prismaService.user.findUnique({
      where: { id: req.user?.id },
      omit: { hashingPassword: false },
    });

    if (!availableAccount) throw new NotFoundException('User not found');

    // validate password
    const isMatch = await verify(availableAccount?.hashingPassword, data.oldPassword);

    if (!isMatch) throw new BadRequestException('Password incorrect');

    // del cache
    const key = `account:${availableAccount.id}`;
    await this.cacheManager.del(key);

    const hashingNewPassword = await this.hasing(data.newPassword);

    // update new password
    const newUser = await this.prismaService.user.update({
      where: { id: availableAccount.id },
      data: { hashingPassword: hashingNewPassword },
    });

    // update cache
    await this.cacheManager.set(key, newUser);

    // send notification
    await this.emailProducer.sendChangePasswordEmail({
      to: availableAccount.email,
    });

    return {
      success: true,
      message: 'Done',
    };
  }

  // refresh access token using refresh token
  public async refreshToken(res: Response, refreshToken?: string, sessionId?: string) {
    if (!refreshToken || !sessionId)
      throw new UnauthorizedException('Refresh or sesison not found');

    // find sesison
    const session = await this.prismaService.session.findUnique({
      where: { id: sessionId },
    });

    if (!session || !session.hashingRefreshToken)
      throw new UnauthorizedException('Invalid session');

    // verify refresh token
    const isValidRefreshToken = await verify(session.hashingRefreshToken, refreshToken);
    if (!isValidRefreshToken) throw new UnauthorizedException('Invalid refresh token');

    // get user
    const exitingUser = await this.prismaService.user.findUnique({
      where: { id: session.userId },
    });

    if (!exitingUser?.isActive) throw new BadRequestException('Somethings went wrong');

    // generate new token
    const tokens = await this.tokenService.generateTokens(exitingUser.id, exitingUser.email);

    // hash new tokens
    const hashingRefreshToken = await this.hasing(tokens.refreshToken);

    // update session
    const newSession = await this.prismaService.session.update({
      where: { id: sessionId },
      data: { hashingRefreshToken: hashingRefreshToken },
    });

    // set new cookies
    res
      .cookie('refresh_token', tokens.refreshToken, {
        maxAge: AUTH_CONSTANTS.TIME_LIFE_REFRESH_TOKEN,
        ...AUTH_CONSTANTS.COOKIE_CONFIG,
      })
      .cookie('access_token', tokens.accessToken, {
        maxAge: AUTH_CONSTANTS.TIME_LIFE_ACCESS_TOKEN,
        ...AUTH_CONSTANTS.COOKIE_CONFIG,
      });

    return {
      message: 'refreshed',
      data: null,
    };
  }

  // logout full device
  async logoutAllOfDevice(req: Request) {
    // check available account
    const userId = req.user?.id || 'unknow';

    const listSession = await this.prismaService.session.findMany({
      where: { userId: userId },
    });

    if (!listSession) {
      return { success: 'Done' };
    }

    const listSessionId = listSession.map((sesison) => sesison.id);

    //delete refresh_token

    listSessionId.map(async (sessionId) => {
      await this.prismaService.session.update({
        where: { id: sessionId },
        data: { hashingRefreshToken: null },
      });
    });

    return {
      success: 'Done',
    };
  }
}
