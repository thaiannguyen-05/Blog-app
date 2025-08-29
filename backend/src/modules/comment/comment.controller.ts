import { BadRequestException, Body, Controller, Delete, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { Request } from "express";
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from "@nestjs/swagger";
import { IsAuthorComment } from "./guard/isAuthorComment.guard";

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
	constructor(
		private readonly commentService: CommentService
	) { }


	@Post('comment')
	@ApiOperation({ summary: "Comment on post" })
	@ApiQuery({ name: 'postId', required: true, type: String })
	@ApiBody({ schema: { type: 'object', properties: { content: { type: 'string' } } } })
	@ApiResponse({ status: 201, description: "Comment created" })
	async comment(@Req() req: Request, @Query('postId') postId: string, @Body('content') content: string) {
		return this.commentService.comment(req, postId, content)
	}

	@Patch('edit-comment')
	@ApiOperation({ summary: "Edit comment" })
	@ApiQuery({ name: 'commentId', required: true, type: String })
	@ApiBody({ schema: { type: 'object', properties: { newContent: { type: 'string' } } } })
	@ApiResponse({ status: 200, description: "Comment edited" })
	@UseGuards(IsAuthorComment)
	async editComment(@Req() req: Request, @Query('commentId') commentId: string, @Body('newContent') newContent: string) {
		return this.commentService.editComment(req, commentId, newContent)
	}

	@Delete('delete-comment')
	@ApiOperation({ summary: "Delete comment" })
	@ApiQuery({ name: 'commentId', required: true, type: String })
	@ApiResponse({ status: 200, description: "Comment deleted" })
	@UseGuards(IsAuthorComment)
	async deleteComment(@Req() req: Request, @Query('commentId') commentId: string) {
		return this.commentService.deleteComment(req, commentId)
	}

	@Post('rep-comment')
	@ApiOperation({ summary: "Reply to comment" })
	@ApiQuery({ name: 'commentId', required: true, type: String })
	@ApiBody({ schema: { type: 'object', properties: { content: { type: 'string' } } } })
	@ApiResponse({ status: 201, description: "Reply created" })
	async repComment(@Req() req: Request, @Query('commentId') commentId: string, @Body('content') content: string) {
		if (!content?.trim()) {
			throw new BadRequestException("Reply content cannot be empty")
		}
		return this.commentService.repComment(req, commentId, content)
	}
}
