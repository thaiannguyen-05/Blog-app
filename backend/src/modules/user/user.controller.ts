import { Body, Controller, Patch, Put, Req, Post, Query } from "@nestjs/common";
import { Request } from 'express';
import { EditDetailDto } from "./dto/EditDetailDto";
import { UserService } from "./user.service";
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from "@nestjs/swagger";

@ApiTags('User')
@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Put('change-detail')
    @ApiOperation({ summary: "Change detail user" })
    @ApiBody({ type: EditDetailDto })
    @ApiResponse({ status: 201, description: 'Change Detail User successful' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async changeDetail(@Req() req: Request, @Body() data: EditDetailDto) {
        return this.userService.editDetailUser(req, data)
    }

    @Patch('change-avt')
    @ApiOperation({ summary: "Change avatar" })
    @ApiBody({ schema: { type: 'object', properties: { filePath: { type: 'string' } } } })
    @ApiResponse({ status: 200, description: 'Change avatar successful' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async changeAvt(@Req() req: Request, @Body('filePath') filePath: string) {
        return this.userService.changeAvt(req, filePath)
    }

    @Post('follow')
    @ApiOperation({ summary: "Follow a user" })
    @ApiParam({ name: 'addressUserId', type: String })
    @ApiResponse({ status: 200, description: 'Follow successful' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async follow(@Req() req: Request, @Query('addressUserId') addressUserId: string) {
        return this.userService.following(req, addressUserId);
    }

    @Post('unfollow')
    @ApiOperation({ summary: "Unfollow a user" })
    @ApiParam({ name: 'addressUserId', type: String })
    @ApiResponse({ status: 200, description: 'Unfollow successful' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    async unfollow(@Req() req: Request, @Query('addressUserId') addressUserId: string) {
        return this.userService.unfollowing(req, addressUserId);
    }
}