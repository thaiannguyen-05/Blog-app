import { BadRequestException, CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { CommentService } from "../comment.service";
import { User } from "prisma/generated/prisma";
import { CommonFunc } from "src/common/func/func.common";

@Injectable()
export class IsAuthorComment implements CanActivate {

	constructor(
		private readonly commentService: CommentService,
		private readonly commonFunc: CommonFunc
	) { }

	async canActivate(
		context: ExecutionContext
	) {
		// get user and object in request
		const request = context.switchToHttp().getRequest()
		const { user, params }: { user: User; params: { id: string } } = request

		if (!user || !params) {
			throw new BadRequestException("Somethings went wrong")
		}

		const userId = user.id
		const objectId = params.id

		// get object
		const comment = await this.commentService.getComment(objectId)
		const owner = await this.commonFunc.getOwn(userId, objectId)

		if (owner?.nameRole !== "ADMIN") {
			throw new BadRequestException("Somethings went wrong")
		}

		if (owner?.userId === userId) {
			return true
		} else {
			throw new ForbiddenException("You are not author")
		}
	}
}