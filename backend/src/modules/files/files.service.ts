import { Injectable, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import fs from 'fs';
@Injectable()
export class FilesService {
  public uploadFiles(files: Array<Express.Multer.File>, body) {
    // get name file
    const fileName = body.name.match(/(.+)-\d+$/)?.[1] ?? body.name;
    const nameDir = 'upload/chunks' + fileName;

    // make file
    if (fs.existsSync(nameDir)) {
      fs.mkdirSync(nameDir);
    }

    // copy file
    const paths = files.map((file) => {
      const destPath = nameDir + '/' + file.originalname;
      fs.copyFileSync(file.path, destPath);
      //remove temp file
      fs.rmSync(file.path);
      return destPath;
    });

    return paths;
  }

  public mergeFile(@Query('file') fileName: string, @Res() res: Response) {
    const nameDir = 'upload/' + fileName;
    //read
    const files = fs.readFileSync(nameDir);

    let startPos = 0,
      count = 0;

    files.forEach((file) => {
      // get path full
      const filePath = nameDir + '/' + file;
      const streamFile = fs.createReadStream(filePath);
      streamFile
        .pipe(
          fs.createWriteStream('upload/' + fileName, {
            start: startPos,
          }),
        )
        .on('finish', () => {
          ++count;
          if (files.length == count) {
            fs.rm(
              nameDir,
              {
                recursive: true,
              },
              () => {},
            );
          }
        });

      startPos += fs.statSync(filePath).size;
    });

    // return to client
    return res.json({
      link: `FE_LINK/${fileName}`,
      fileName,
    });
  }
}
