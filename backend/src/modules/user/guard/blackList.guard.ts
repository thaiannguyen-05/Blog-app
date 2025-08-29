import { CanActivate, ExecutionContext, Injectable, NotFoundException } from "@nestjs/common";
import { User } from "prisma/generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";
import { UserService } from "../user.service";

@Injectable()
export class BlackListGuard implements CanActivate {
	constructor(
		private readonly userService: UserService,
		private readonly prismaService: PrismaService
	) { }

	async canActivate(context: ExecutionContext) {
		// get user in request
		const request = context.switchToHttp().getRequest()
		const { user, name }: { user: User; name: string } = request
		if (!user) return true

		const userId = user.id

		// validate 
		const blackList = await this.userService.getBlackList(userId)

		const blockedUser = await this.prismaService.user.findFirst({
			where: { name: name }
		})

		const has = blackList.map(user => user.id === blockedUser?.id)

		if(has) {
			throw new NotFoundException("Nothing information found")
		} else {
			return true
		}
	}
}