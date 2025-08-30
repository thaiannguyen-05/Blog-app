import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Post, Query, Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { Cookies } from "src/modules/auth/decorator/cookie.decorator";
import { Public } from "src/common/decorator/public.decorator";
import { AuthService } from "./auth.service";
import { ChangePasswordDto } from "./dto/changePassword.dto";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBody, ApiCookieAuth } from "@nestjs/swagger";
import { SoftDeleteAccountDto } from "./dto/softDeleteAccount.dto";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Public()
    @Get('verify-account')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Verify account by email" })
    @ApiQuery({ name: 'email', required: true, type: String })
    @ApiResponse({ status: 200, description: "Account verified" })
    @ApiResponse({ status: 400, description: "Invalid email" })
    async verifyAccount(@Query('email') email: string, @Res() res: Response) {
        return this.authService.verifyAccount(email, res)
    }

    @Post('soft-delete-account')
    @ApiOperation({ summary: "Delete account by email" })
    @ApiQuery({ name: 'email', required: true, type: String })
    @ApiResponse({ status: 200, description: "Account deleted" })
    @ApiResponse({ status: 404, description: "Account not found" })
    async deleteAccount(@Body() data: SoftDeleteAccountDto) {
        return this.authService.deleteAccountByEmail(data)
    }

    @Public()
    @Post('register')
    @ApiOperation({ summary: "Register account" })
    @ApiBody({ type: RegisterDto })
    @ApiResponse({ status: 201, description: "Register success" })
    @ApiResponse({ status: 400, description: "Validation failed" })
    async register(@Body() data: RegisterDto) {
        return this.authService.register(data)
    }

    @Public()
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: "Login" })
    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 200, description: "Login success" })
    @ApiResponse({ status: 401, description: "Unauthorized" })
    async login(@Body() data: LoginDto, @Res() res: Response) {
        const result = await this.authService.login(data, res)
        return res.json(result)
    }

    @Post("logout")
    @ApiOperation({ summary: "Logout" })
    @ApiCookieAuth()
    @ApiResponse({ status: 200, description: "Logout success" })
    async logout(@Res({ passthrough: true }) res: Response, @Cookies("sesison_id") sessionId?: string) {
        return this.authService.logout(res, sessionId)
    }

    @Post("change-password")
    @ApiOperation({ summary: "Change password" })
    @ApiBody({ type: ChangePasswordDto })
    @ApiResponse({ status: 200, description: "Password changed" })
    @ApiResponse({ status: 400, description: "Validation failed" })
    async changePassword(@Req() req: Request, @Body() data: ChangePasswordDto) {
        return this.authService.changePassword(req, data)
    }

    @Public()
    @Post("refresh-token")
    @ApiOperation({ summary: "Refresh token" })
    @ApiCookieAuth()
    @ApiResponse({ status: 200, description: "Token refreshed" })
    @ApiResponse({ status: 401, description: "Invalid token" })
    async refreshToken(
        @Res({ passthrough: true }) res: Response,
        @Cookies("refresh_token") refreshToken?: string,
        @Cookies("sesison_id") sessionId?: string
    ) {
        return this.authService.refreshToken(res, refreshToken, sessionId)
    }
}