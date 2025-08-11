import { Body, Controller, Delete, Get, Patch, Post, Put, Query, Req, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
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
    async createPost(@Req() req: Request, @Body('content') content: string, @UploadedFiles(new FileArrayValidationPipe()) files: Array<Express.Multer.File>) {
        return this.postService.createPost(req, content, files)
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
    async editPost(@Query('idPost') idPost: string, @Body('newContent') newContent: string, @Req() req: Request, @UploadedFiles(new FileArrayValidationPipe()) files: Array<Express.Multer.File>) {
        return this.postService.editPost(req, files, newContent, idPost)
    }

    @Delete('delete-post')
    async deletePost(@Req() req: Request, @Query('postId') postId: string) {
        return this.postService.deletePost(postId, req)
    }

    @Get('list-post')
    async listPost(@Req() req: Request) {
        return this.userService.loadAllAuthorPost(req)
    }

    @Public()
    @Get('post')
    async getDetailPost(@Query('postId') postId: string) {
        return this.postService.getDetailPost(postId)
    }

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
        return this.commentService.repComment(req, commentId, content)
    }
}