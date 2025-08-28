import { Body, Controller, Patch, Put, Req } from "@nestjs/common";
import { Request } from 'express';
import { EditDetailDto } from "./dto/EditDetailDto";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ) { }

    @Put('change-detail')
    async changeDetail(@Req() req: Request, @Body() data: EditDetailDto) {
        return this.userService.editDetailUser(req, data)
    }

    @Patch('change-avt')
    async changeAvt(@Req() req: Request, @Body('filePath')filePath: string) {
        return this.userService.changeAvt(req, filePath)
    }


}