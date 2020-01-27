import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagRepository } from './tag.repository';

@Module({
  imports:[TypeOrmModule.forFeature([TagRepository])],
  controllers: [TagController]
})
export class TagModule {}
