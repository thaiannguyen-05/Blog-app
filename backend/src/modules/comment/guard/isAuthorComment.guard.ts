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
		const user: User = request.user
		const commentId: string = request.query?.commentId || request.params?.commentId

		if (!user || !commentId) throw new BadRequestException("Data not in request")


		// get object
		const comment = await this.commentService.getComment(commentId)
		const owner = await this.commonFunc.getOwn(user.id, commentId)

		if (owner?.nameRole !== "ADMIN") {
			throw new BadRequestException("Somethings went wrong")
		}

		if (owner?.userId === user.id) {
			return true
		} else {
			throw new ForbiddenException("You are not author")
		}
	}
}