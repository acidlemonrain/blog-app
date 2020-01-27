import { Module } from '@nestjs/common';
import { WeiboController } from './weibo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeiboRepository } from './weibo.repository';

@Module({
  imports:[TypeOrmModule.forFeature([WeiboRepository])],
  controllers: [WeiboController]
})
export class WeiboModule {}
