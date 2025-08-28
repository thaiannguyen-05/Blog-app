import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { PayLoad } from "./auth.interface";
import { randomUUID } from "node:crypto";
import { AuthService } from "./auth.service";

@Injectable()
export class TokenService {

    constructor(
        private readonly configService: ConfigService,
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService,
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) { }

    // generate tokens
    async generateTokens(userId: string, email: string) {
        // create payload
        const payload: PayLoad = {
            sub: userId,
            email: email,
            timestamp: new Date()
        }

        // generate accesstoken and refreshtoken
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET"),
                expiresIn: this.configService.getOrThrow<string>("TIME_LIFE_ACCESS_TOKEN")
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.getOrThrow<string>("JWT_SECRET"),
                expiresIn: this.configService.getOrThrow<string>("TIME_LIFE_REFRESH_TOKEN")
            })
        ])

        return { accessToken, refreshToken }

    }

    // store tokens 
    async storeTokens(userId: string, email: string, hashRefreshToken: string, ip: string, userAgent: string, sessionId?: string) {
        // 1.Generate sessionId if not provided
        sessionId = sessionId || randomUUID()

        // 2.Try to find existing session by sessionId first, not userAgent
        let existingSession = await this.prismaService.session.findUnique({
            where: { userAgent }
        })
        
        // 3. update session if session is available
        if (existingSession) {
            // Check if this is the same device/browser
            await this.authService.checkIpOrUserAgentId(userAgent, ip, email, existingSession)

            // Update existing session
            return await this.prismaService.session.update({
                where: { id: existingSession.id },
                data: {
                    hashingRefreshToken: hashRefreshToken,
                    userIp: ip // Update IP in case it changed
                }
            })
        }

        // 4.Fallback create new session
        return await this.prismaService.session.create({
            data: {
                id: sessionId,
                hashingRefreshToken: hashRefreshToken,
                userId: userId,
                userAgent: userAgent,
                userIp: ip
            }
        })
    }


}