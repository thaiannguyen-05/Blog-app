import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { BadRequestException, ConflictException, ForbiddenException, forwardRef, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { hash, verify } from "argon2";
import { Request, Response } from 'express';
import { User } from "prisma/generated/prisma";
import { ExmailProducerService } from "src/email/email.producer";
import { PrismaService } from "src/prisma/prisma.service";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import { RegisterDto } from "./dto/register.dto";
import { TokenService } from "./token.service";
import { PresenceService } from "../presence/presence.service";

const TIME_LIFE_CACHE = 10 * 24 * 60 * 60
const TIME_LIFE_SESSION = 10 * 365 * 24 * 60 * 60 * 1000
const TIME_LIFE_ACCESS_TOKEN = 1000 * 60 * 60
const TIME_LIFE_REFRESH_TOKEN = 24 * 60 * 60 * 7
@Injectable()
export class AuthService {

    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
        private readonly prismaService: PrismaService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly tokenService: TokenService,
        private readonly emailProducer: ExmailProducerService,
        private readonly presenceService: PresenceService
    ) { }

    // hashing password
    async hasing(password: string) {
        return await hash(password)
    }

    // verify account with accesstoken
    async validate(accessToken: string) {
        try {
            // get id in payload
            const payload = await this.jwtService.verifyAsync(accessToken, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET")
            })

            // find user 
            const exitingUser = await this.prismaService.user.findUnique({
                where: { id: payload.sub }
            })

            if (!exitingUser) {
                throw new NotFoundException('User not found')
            }

            return exitingUser

        } catch (error) {
            if (error instanceof UnauthorizedException) {
                throw error
            }
            throw new UnauthorizedException("Invalid or expired access token")
        }
    }


    // register
    async register(data: RegisterDto) {

        // check available account
        const eixtingAccount = await this.prismaService.user.findFirst({
            where: { email: data.email }
        })

        if (eixtingAccount) throw new BadRequestException('Account already exists')

        // hahsing password
        const hashingPassword = await this.hasing(data.password)

        // register new account
        const newAccount = await this.prismaService.user.create({
            data: {
                email: data.email,
                hashingPassword: hashingPassword
            },
            omit: { hashingPassword: false }
        })

        // cache account
        const key = `account:${data.email}`
        const user = await this.cacheManager.set(key, newAccount, TIME_LIFE_CACHE)

        const verifyLink = `http://localhost:4000/auth/verify-account?email=${data.email}`

        // send email nofification verify account
        await this.emailProducer.sendNotificationRegister({
            to: newAccount.email,
            verifyLink
        })

        return newAccount
    }

    // verify account
    async verifyAccount(email: string, res: Response) {
        // get account from cache
        const key = `account:${email}`
        const exitingAccount = await this.cacheManager.get(key)

        if (!exitingAccount) throw new NotFoundException("Account is not exiting")

        // update account
        const newAccount = await this.prismaService.user.update({
            where: { email: email },
            data: { isActive: true },
            omit: { hashingPassword: false }
        })

        // update cache
        await this.cacheManager.del(key)
        const newCache = await this.cacheManager.set(key, newAccount, TIME_LIFE_CACHE)

        return res.send(`
            <html>
              <head><title>Verify Success</title></head>
              <body style="font-family: sans-serif; text-align: center; margin-top: 100px;">
                <h2 style="color: green">Email verified successfully!</h2>
                <p>You can now login to your account.</p>
              </body>
            </html>
          `)
    }

    // delete account by email
    async deleteAccountByEmail(email: string) {
        // get account from cache
        const key = `account:${email}`
        const exitingAccount = await this.cacheManager.get(key)

        if (!exitingAccount) throw new NotFoundException("Account is not exiting")

        // delete account from cache
        await this.cacheManager.del(key)

        // delete account from database
        await this.prismaService.user.delete({
            where: { email: email }
        })

        return exitingAccount
    }


    // create session
    async createSession(user: User, session_id: string, res: Response) {

        // generate token 
        const tokens = await this.tokenService.generateTokens(user.id, user.email)

        // hash
        const hashRefreshToken = await this.hasing(tokens.refreshToken)

        // store tokens
        const session = await this.tokenService.storeTokens(user.id, hashRefreshToken)

        // set maxage
        res
            .cookie("sesison_id", session.id, {
                maxAge: TIME_LIFE_SESSION
            })

        res
            .cookie("access_token", tokens.accessToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: TIME_LIFE_ACCESS_TOKEN,
                path: '/',
            })
            .cookie("refresh_token", tokens.refreshToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'lax',
                maxAge: TIME_LIFE_REFRESH_TOKEN,
                path: '/',
            })

        return { session, tokens }
    }

    // login 
    async login(data: RegisterDto, res: Response) {

        // check available user
        const exitingAccount = await this.prismaService.user.findFirst({
            where: { email: data.email },
            omit: { hashingPassword: false }
        })

        if (!exitingAccount) {
            throw new NotFoundException('User not found')
        }

        // verify password
        const isMatch = await verify(exitingAccount.hashingPassword, data.password)

        if (!isMatch) {
            throw new UnauthorizedException('Password is not match')
        }

        if (!exitingAccount.isActive) {
            const verifyLink = `http://localhost:4000/auth/verify-account?email=${data.email}`

            await this.emailProducer.sendNotificationRegister({
                to: exitingAccount.email,
                verifyLink
            })
            throw new ForbiddenException("Account is not verified. Please check your email to verify your account.")
        }

        // create session
        const session = await this.createSession(exitingAccount, res.req.cookies?.session_id, res)

        const accessToken = session.tokens.accessToken

        // set user online
        await this.presenceService.setUserOnline(exitingAccount.id)

        return {
            user: {
                id: exitingAccount.id,
                name: exitingAccount.name,
                email: exitingAccount.email,
                avatar: exitingAccount.avtUrl,
                isActive: exitingAccount.isActive
            },
            token: accessToken,
            success: true,
            message: "Login successful"
        }
    }

    // logout
    async logout(res: Response, sesisonId?: string) {
        // clear accesstoken and refreshtoken
        res.clearCookie("access_token").clearCookie("refresh_token")

        const sid = res.req.cookies?.sesison_id || sesisonId

        if (!sid) {
            throw new ConflictException("Session is not require")
        }

        // clear refreshtoken
        await this.prismaService.session.update({
            where: { id: sid },
            data: {
                hashingRefreshToken: null
            }
        })

        const user = await this.validate(res.req.cookies?.access_token)

        // set user offline
        await this.presenceService.setUserOffline(user.id)

        return {
            message: "Done"
        }
    }

    // change password
    async changePassword(req: Request, data: ChangePasswordDto) {

        const userId = req.user?.id

        // find user
        const exitingUser = await this.prismaService.user.findUnique({
            where: { id: userId },
            omit: { hashingPassword: false }
        })

        if (!exitingUser) {
            throw new NotFoundException("User not found")
        }

        const isMatch = await verify(exitingUser?.hashingPassword, data.oldPassword)

        if (!isMatch) {
            throw new BadRequestException("Password incorrect")
        }

        const hashingNewPassword = await this.hasing(data.newPassword)

        // update new password
        const newUser = await this.prismaService.user.update({
            where: { id: exitingUser.id },
            data: { hashingPassword: hashingNewPassword }
        })

        // send notification
        await this.emailProducer.sendChangePasswordEmail({
            to: exitingUser.email
        })

        return newUser
    }
}