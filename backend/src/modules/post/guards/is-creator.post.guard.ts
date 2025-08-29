import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { User } from "prisma/generated/prisma";
import { PostService } from "../post.service";
import { CommonFunc } from "src/common/func/func.common";

@Injectable()
export class IsCreatorPostGuard implements CanActivate {
	constructor(
		private readonly postService: PostService,
		private readonly commonFuncion: CommonFunc
	) { }

	async canActivate(
		context: ExecutionContext,
	) {
		// get user in request
		const request = context.switchToHttp().getRequest();
		const { user, params }: { user: User; params: { id: string } } = request;

		if (!user || !params) {
			throw new BadRequestException("Somethings went wrong");
		}

		const userId = user.id
		const objectId = params.id

		// user with roles
		const owner = await this.commonFuncion.getOwn(userId, objectId)
		if (owner?.nameRole !== "ADMIN") {
			throw new ForbiddenException("You are not author")
		}

		// find post
		const post = await this.postService.getPostObject(objectId)

		// validate 
		if (post?.userId === owner.userId) {
			return true
		} else {
			throw new ForbiddenException("You are not author")
		}
	}
}