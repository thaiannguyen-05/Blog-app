import { BadRequestException, Body, Controller, Delete, Get, Patch, Post, Put, Query, Req, UploadedFile, UploadedFiles, UseInterceptors, ParseUUIDPipe } from "@nestjs/common";
import { AnyFilesInterceptor, FileInterceptor } from "@nestjs/platform-express";
import { Request } from 'express';
import { diskStorage } from "multer";
import { FileValidationPipe } from "src/common/pipe/file.pipe";
import { EditDetailDto } from "./dto/EditDetailDto";
import { UserService } from "./user.service";
import { PostService } from "../post/post.service";
import { FileArrayValidationPipe } from "src/common/pipe/file-array.pipe";
import { CommentService } from "../comment/comment.service";
import { Roles } from "src/common/decorator/role.decorator";
import { Public } from "src/common/decorator/public.decorator";

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
        private readonly postService: PostService,
        private readonly commentService: CommentService
    ) { }

    @Put('change-detail')
    async changeDetail(@Req() req: Request, @Body() data: EditDetailDto) {
        return this.userService.editDetailUser(req, data)
    }

    @Patch('change-avt')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './upload',
            filename: (req, file, callback) => {
                const uniquename = `${Date.now()}-${file.originalname}`
                callback(null, uniquename)
            }
        })
    }))
    async changeAvt(@Req() req: Request, @UploadedFile(new FileValidationPipe()) file: Express.Multer.File) {
        return this.userService.changeAvt(req, file)
    }

    @Post('create-post')
    @UseInterceptors(AnyFilesInterceptor({
        storage: diskStorage({
            destination: './upload',
            filename: (req, files, callback) => {
                const uniquename = `${Date.now()}-${files.originalname}`
                callback(null, uniquename)
            }
        })
    }))
    async createPost(
        @Req() req: Request,
        @Body('content') content: string,
        @UploadedFiles(new FileArrayValidationPipe()) files: Array<Express.Multer.File>
    ) {
        if (!content?.trim()) {
            throw new BadRequestException("Post content cannot be empty")
        }
        // Service expects: createPost(req, content, files)
        return this.postService.createPost(req, content, files || [])
    }

    @Put('edit-post')
    @UseInterceptors(AnyFilesInterceptor({
        storage: diskStorage({
            destination: './upload',
            filename: (req, files, callback) => {
                const uniquename = `${Date.now()}-${files.originalname}`
                callback(null, uniquename)
            }
        })
    }))
    async editPost(
        @Req() req: Request,
        @UploadedFiles(new FileArrayValidationPipe()) files: Array<Express.Multer.File>,
        @Body('newContent') newContent: string,
        @Query('idPost') idPost: string
    ) {
        if (!newContent?.trim()) {
            throw new BadRequestException("Post content cannot be empty")
        }
        // Service expects: editPost(req, files, newContent, postId)
        return this.postService.editPost(req, files || [], newContent, idPost)
    }

    @Delete('delete-post')
    async deletePost(
        @Query('postId') postId: string,
        @Req() req: Request
    ) {
        // Service expects: deletePost(postId, req)
        return this.postService.deletePost(postId, req)
    }


    @Public()
    @Get('post')
    async getDetailPost(
        @Query('postId') postId: string,
        @Query('page') page?: number,
        @Query('limit') limit?: number
    ) {
        const pageNum = page ? Number(page) : 1
        const limitNum = limit ? Number(limit) : 10

        if (isNaN(pageNum) || isNaN(limitNum) || pageNum < 1 || limitNum < 1) {
            throw new BadRequestException("Page and limit must be positive numbers")
        }
        // Service expects: getPost(postId, page, limit)
        return this.postService.getPost(postId, pageNum, limitNum)
    }

    @Public()
    @Get('search')
    async searchPosts(
        @Query('content') content: string,
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10
    ) {
        if (!content?.trim()) {
            throw new BadRequestException("Search content cannot be empty")
        }

        const pageNum = Number(page)
        const limitNum = Number(limit)

        if (isNaN(pageNum) || isNaN(limitNum) || pageNum < 1 || limitNum < 1) {
            throw new BadRequestException("Page and limit must be positive numbers")
        }

        // Service expects: findPostByName(content, page, limit)
        return this.postService.findPostByName(content, pageNum, limitNum)
    }

    @Post('comment')
    async comment(@Req() req: Request, @Query('postId') postId: string, @Body('content') content: string) {
        if (!content?.trim()) {
            throw new BadRequestException("Comment content cannot be empty")
        }
        return this.commentService.comment(req, postId, content)
    }

    @Patch('edit-comment')
    async editComment(@Req() req: Request, @Query('commentId') commentId: string, @Body('newContent') newContent: string) {
        if (!newContent?.trim()) {
            throw new BadRequestException("Comment content cannot be empty")
        }
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