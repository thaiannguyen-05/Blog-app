import { Body, Controller, Delete, Get, Post, Query, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { Cookies } from "src/common/decorator/cookie.decorator";
import { Public } from "src/common/decorator/public.decorator";
import { AuthService } from "./auth.service";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Public()
    @Get('verify-account')
    async verifyAccount(@Query('email') email: string, @Res() res: Response) {
        return this.authService.verifyAccount(email, res)
    }

    @Delete('delete-account')
    async deleteAccount(@Query('email') email: string) {
        return this.authService.deleteAccountByEmail(email)
    }

    @Public()
    @Post('register')
    async register(@Body() data: RegisterDto) {
        return this.authService.register(data)
    }

    @Public()
    @Post('login')
    async login(@Body() data: RegisterDto, @Res() res: Response) {
        const result = await this.authService.login(data, res)
        return res.json(result)
    }

    @Post("logout")
    async logout(@Res({ passthrough: true }) res: Response, @Cookies("sesison_id") sessionId?: string) {
        return this.authService.logout(res, sessionId)
    }

    @Post("change-password")
    async changePassword(@Req() req: Request, @Body() data: ChangePasswordDto) {
        return this.authService.changePassword(req, data)
    }
}