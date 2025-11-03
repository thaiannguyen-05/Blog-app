import { Body, Controller, Post, Query, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { FilesService } from './files.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiQuery } from '@nestjs/swagger';

@ApiTags('File')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FilesService) {}

  @UseInterceptors(
    FilesInterceptor('files', 20, {
      dest: 'upload',
    }),
  )
  @Post('upload')
  @ApiOperation({ summary: 'Upload files' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        files: { type: 'array', items: { type: 'string', format: 'binary' } },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Files uploaded' })
  async uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body) {
    return this.fileService.uploadFiles(files, body);
  }

  @Post('mergeFile')
  @ApiOperation({ summary: 'Merge file' })
  @ApiQuery({ name: 'file', required: true, type: String })
  @ApiResponse({ status: 200, description: 'File merged' })
  mergeFile(@Query('file') fileName: string, @Res() res: Response) {
    return this.fileService.mergeFile(fileName, res);
  }
}
