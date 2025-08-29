import { Body, Controller, Patch, Put, Req, Post, Query, UseGuards, Get, Param } from "@nestjs/common";
import { Request } from 'express';
import { EditDetailDto } from "./dto/EditDetailDto";
import { UserService } from "./user.service";
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam } from "@nestjs/swagger";
import { BlackListGuard } from "./guard/blackList.guard";
import { FindUserByName } from './dto/FindUserByName';

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
    @UseGuards(BlackListGuard)
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

    // Find user by name
    @Get('find')
    async findUserByName(
        @Query('name') name: string,
        @Query() query: FindUserByName
    ) {
        return await this.userService.findUserByName(name, query);
    }

    // Block user
    @Post('block')
    async blockUser(@Req() req: Request, @Query('addressUserId') addressUserId: string) {
        return await this.userService.blockUser(req, addressUserId);
    }

    // Get user profile (getFrolife)
    @Get('profile')
    async getFrolife(@Query('userId') userId: string) {
        return await this.userService.getFrolife(userId);
    }
}