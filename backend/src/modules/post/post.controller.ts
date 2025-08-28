import { Body, Controller, Delete, Get, Post, Put, Query, Req } from "@nestjs/common";
import { Request } from "express";
import { Public } from "src/common/decorator/public.decorator";
import { CreatePostDto } from "./dto/create.post.dto";
import { EditPostDto } from "./dto/edit.post.dto";
import { GetDetailPostDto } from "./dto/get.detail.post.dto";
import { GetManyPostDto } from "./dto/get.many.post.dto";
import { PostService } from "./post.service";
@Controller('post')
export class PostController {
	constructor(
		private readonly postService: PostService
	) { }

	@Post('create-post')
	async createPost(
		@Req() req: Request,
		@Body() data: CreatePostDto
	) {
		return this.postService.createPost(req, data.content, data.paths || [])
	}

	@Put('edit-post')
	async editPost(
		@Req() req: Request,
		@Body() data: EditPostDto,
		@Query('postId') postId: string
	) {
		return this.postService.editPost(req, data.filePaths, postId, data.newContent)
	}

	@Delete('delete-post')
	async deletePost(
		@Query('postId') postId: string,
		@Req() req: Request
	) {
		return this.postService.deletePost(postId, req)
	}

	@Public()
	@Get('post')
	async getDetailPost(
		@Query('postId') postId: string,
		@Body() query: GetDetailPostDto
	) {
		return this.postService.getPost(postId, query)
	}

	@Public()
	@Get('search')
	async searchPosts(
		@Query('content') content: string,
		@Query() query: GetManyPostDto
	) {
		return this.postService.findPostByName(content, query)
	}
}