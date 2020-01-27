import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TagRepository } from './tag.repository';
@Controller('tag')
export class TagController {
  constructor(
    @InjectRepository(TagRepository)
    private Db: TagRepository,
  ) {}



  @Post('/')
  async make_item(@Body() body){
    const create_item = await this.Db.save(body);
    return  create_item;
  }

  @Post('/get')
  async get_item1(@Body() body){
    return this.Db.find({relations:body.relations})
  }

  @Post('/get/page/:page/take/:take')
  async  get_item_page(@Param() params,@Body() body){
    const items = await  this.Db.find({ take:params.take,skip:(params.page-1)*params.take,relations:body.relations})
    const pages = await  this.Db.count()
    return {
      data:items,
      total_pages:Math.floor(pages/params.take)
    }
  }

  @Post('/find')
  async  find_item(@Body() body){
    const item = await  this.Db.findOne(body.id);
    return item
  }

  @Post('/delete')
  async delete(@Body() body){
    return await  this.Db.remove(body)
  }

}
