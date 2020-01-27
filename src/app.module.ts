import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { TagModule } from './tag/tag.module';
import { WeiboModule } from './weibo/weibo.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BlogModule, TagModule, WeiboModule, FileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
