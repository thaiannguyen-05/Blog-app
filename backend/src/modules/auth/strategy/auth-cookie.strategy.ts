import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-custom";
import { AuthService } from "src/modules/auth/auth.service";
import { Request } from 'express'
@Injectable()
export class AuthCookieStrategy extends PassportStrategy(Strategy, 'auth-cookie') {

    constructor(
        private readonly authService: AuthService
    ) { 
        super()
    }

    async validate(req: Request): Promise<any> {
        // get access token from cookie
        const accessToken = req.cookies?.access_token

        if(!accessToken) {
            throw new UnauthorizedException("Access token not found")
        }

        // validate user
        return this.authService.validate(accessToken)
    }


}