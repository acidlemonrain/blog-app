import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
