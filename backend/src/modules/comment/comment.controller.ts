import { BadRequestException, Body, Controller, Delete, Patch, Post, Query, Req } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { Request } from "express";
@Controller('comment')
export class CommentController {
	constructor(
		private readonly commentService: CommentService
	) { }


	@Post('comment')
	async comment(@Req() req: Request, @Query('postId') postId: string, @Body('content') content: string) {
		return this.commentService.comment(req, postId, content)
	}

	@Patch('edit-comment')
	async editComment(@Req() req: Request, @Query('commentId') commentId: string, @Body('newContent') newContent: string) {
		return this.commentService.editComment(req, commentId, newContent)
	}

	@Delete('delete-comment')
	async deleteComment(@Req() req: Request, @Query('commentId') commentId: string) {
		return this.commentService.deleteComment(req, commentId)
	}

	@Post('rep-comment')
	async repComment(@Req() req: Request, @Query('commentId') commentId: string, @Body('content') content: string) {
		if (!content?.trim()) {
			throw new BadRequestException("Reply content cannot be empty")
		}
		return this.commentService.repComment(req, commentId, content)
	}
} 
