import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogRepository } from './blog.repository';

@Controller('blog')
export class BlogController {
  constructor(
    @InjectRepository(BlogRepository)
    private Db: BlogRepository,
  ) {}

  //创建
  @Post('/')
  async make_item(@Body() body){
    const create_item = await this.Db.save(body);
    return  create_item;
  }

  @Post('/get')
  async get_item1(@Body() body){
    console.log(body);
    return this.Db.find({relations:['tags'],order:{gen:'DESC'}})
  }

  @Post('/get/page/:page/take/:take')
  async  get_item_page(@Param() params,@Body() body){
    const items = await  this.Db.find({ take:params.take,skip:(params.page-1)*params.take,relations:body.relations,order:{gen:'DESC'}});
    const pages = await  this.Db.count()
    return {
      data:items,
      total_pages:Math.ceil(pages/params.take)
    }
  }

  @Post('/find')
  async  find_item(@Body() body){
    console.log(body);
    const item = await  this.Db.findOne({where:{id:body.id},relations:['tags']});
    return item
  }

  @Post('/delete')
  async delete(@Body() body){
    return await  this.Db.remove(body)
  }

  @Post('/add-tag')
  async add_tag(@Body() body){
    const blog = await  this.Db.findOne({where:{id:body.blog.id},relations:['tags']})
    console.log(blog);
    blog.tags.push(body.tag)
    return  this.Db.save(blog)
  }

}
