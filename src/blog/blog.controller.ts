import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { BlogRepository } from './blog.repository';

@Controller('blog')
export class BlogController {
  constructor(
    @InjectRepository(BlogEntity)
    private blogDb: BlogRepository,
  ) {}

  //创建
  @Post('/')
  async make_blog(@Body() body){
    console.log(1231);
    const create_blog = await this.blogDb.save(body);
    return  create_blog;
  }

  @Post('/get')
  async  get_blog(@Body() body){
    const blog = await  this.blogDb.find();
    return blog
  }

  @Post('/find')
  async  find_blog(@Body() body){
    const blog = await  this.blogDb.findOne(body.id);
    return blog
  }


}
