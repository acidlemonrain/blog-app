import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';

@Module({
  imports:[TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogController]
})
export class BlogModule {}
