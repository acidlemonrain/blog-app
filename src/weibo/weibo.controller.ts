import {
  Body,
  Controller,
  Get, Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WeiboRepository } from './weibo.repository';
import {
  FilesInterceptor,
} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { unlink } from 'fs';
@Controller('weibo')
export class WeiboController {
  constructor(
    @InjectRepository(WeiboRepository)
    private weiboDb: WeiboRepository,
  ) {}

  //
  @Get('/')
  async get_all(){
    return await this.weiboDb.find({order:{gen:'DESC'}})
  }


  @Get('/delete/:id')
  async  delete_weibo(@Param('id') id){
    const  weibo = await this.weiboDb.findOne(id)
    weibo.images.split(',').forEach(image=>{
      unlink('files/'+image,()=>{})
    })
    this.weiboDb.delete(id);

  }

  //创建新的微博

  @Post('create')
  @UseInterceptors(
    FilesInterceptor('image', 20, {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = extname(file.originalname);
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFiles() files,@Body() body) {
    if(files.length>0){
      const images = (files.map(d=>d.filename)).join();
      this.weiboDb.save({
        content:body.content,
        images:images
      })
    }else{
      this.weiboDb.save({
        content:body.content,
      })
    }

  }
}
