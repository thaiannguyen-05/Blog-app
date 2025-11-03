// production se su dung 3s de luu thay vi localstorage

import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileController } from './file.controller';

@Module({
  controllers: [FileController],
  providers: [FilesService],
  exports: [FilesService],
})
export class FilesModule {}
