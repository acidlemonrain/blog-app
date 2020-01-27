import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('files')
export class FileController {

  @Get('/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    try {
      console.log(fileId);
      res.sendFile(fileId, { root: 'files' });
    } catch (e) {
      console.log(e);
    }
  }

}
