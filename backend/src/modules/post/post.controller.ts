import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { Public } from 'src/common/decorator/public.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery, ApiParam } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create.post.dto';
import { EditPostDto } from './dto/edit.post.dto';
import { GetDetailPostDto } from './dto/get.detail.post.dto';
import { GetManyPostDto } from './dto/get.many.post.dto';
import { PostService } from './post.service';
import { IsCreatorPostGuard } from './guards/is-creator.post.guard';
import { BlackListGuard } from '../user/guard/blackList.guard';
@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Public()
  @Patch(':id/view')
  @ApiOperation({ summary: 'Increase post view count' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Post ID',
  })
  @ApiResponse({ status: 200, description: 'View count increased' })
  async increamentView(@Param('id') postId: string) {
    return this.postService.increamentView(postId);
  }

  @Public()
  @Get(':id/views')
  @ApiOperation({ summary: 'Get post view count' })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Post ID',
  })
  @ApiResponse({ status: 200, description: 'Current view count' })
  async getViews(@Param('id') postId: string) {
    return this.postService.getViewsPost(postId);
  }

  @Post('create-post')
  @ApiOperation({ summary: 'Create post' })
  @ApiBody({ type: CreatePostDto })
  @ApiResponse({ status: 201, description: 'Post created' })
  async createPost(@Req() req: Request, @Body() data: CreatePostDto) {
    return this.postService.createPost(req, data.content, data.paths || []);
  }

  @Put('edit-post')
  @ApiOperation({ summary: 'Edit post' })
  @ApiBody({ type: EditPostDto })
  @ApiQuery({ name: 'postId', required: true, type: String })
  @ApiResponse({ status: 200, description: 'Post edited' })
  @UseGuards(IsCreatorPostGuard)
  async editPost(@Req() req: Request, @Body() data: EditPostDto, @Query('postId') postId: string) {
    return this.postService.editPost(req, data.filePaths, postId, data.newContent);
  }

  @Delete('delete-post')
  @ApiOperation({ summary: 'Delete post' })
  @ApiQuery({ name: 'postId', required: true, type: String })
  @ApiResponse({ status: 200, description: 'Post deleted' })
  @UseGuards(IsCreatorPostGuard)
  async deletePost(@Query('postId') postId: string, @Req() req: Request) {
    return this.postService.deletePost(postId, req);
  }

  @Public()
  @Get('post')
  @ApiOperation({ summary: 'Get detail post' })
  @ApiQuery({ name: 'postId', required: true, type: String })
  @ApiBody({ type: GetDetailPostDto })
  @ApiResponse({ status: 200, description: 'Post detail' })
  async getDetailPost(@Query('postId') postId: string, @Body() query: GetDetailPostDto) {
    return this.postService.getPost(postId, query);
  }

  @Public()
  @Get('search')
  @ApiOperation({ summary: 'Search posts' })
  @ApiQuery({ name: 'content', required: false, type: String })
  @UseGuards(BlackListGuard)
  @ApiResponse({ status: 200, description: 'Search results' })
  async searchPosts(@Query('content') content: string, @Query() query: GetManyPostDto) {
    return this.postService.findPostByName(content, query);
  }

  @Put('like-post')
  @ApiOperation({ summary: 'Like post' })
  @ApiQuery({ name: 'postId', required: true, type: String })
  @ApiResponse({ status: 200, description: 'Post liked' })
  async likePost(@Req() req: Request, @Query('postId') postId: string) {
    return this.postService.likePost(req, postId);
  }

  @Put('unlike-post')
  @ApiOperation({ summary: 'Unlike post' })
  @ApiQuery({ name: 'postId', required: true, type: String })
  @ApiResponse({ status: 200, description: 'Post unliked' })
  async unLikedPost(@Req() req: Request, @Query('postId') postId: string) {
    return this.postService.unLikePost(req, postId);
  }

  @Public()
  @Get('author-posts')
  @ApiOperation({ summary: 'Load all posts by author' })
  @ApiQuery({ name: 'authorId', required: true, type: String })
  @ApiResponse({ status: 200, description: "Author's posts" })
  async loadAllAuthorPost(@Query('authorId') authorId: string, @Query() query: GetManyPostDto) {
    return this.postService.loadAllAuthorPost(authorId, query);
  }
}
