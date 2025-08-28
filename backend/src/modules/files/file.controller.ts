import { Body, Controller, Post, Query, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FilesService } from './files.service';

@Controller('file')
export class FileController {

	constructor(
		private readonly fileService: FilesService
	) { }

	@UseInterceptors(FilesInterceptor('files', 20, {
		dest: 'upload'
	}))
	async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
		return this.fileService.uploadFiles(files, body)
	}

	@Post('mergeFile')
	mergeFile(@Query('file') fileName: string, @Res() res: Response) {
		return this.fileService.mergeFile(fileName, res)
	}
}
