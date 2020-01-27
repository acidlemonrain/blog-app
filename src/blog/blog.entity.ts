import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity, ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TagEntity } from '../tag/tag.entity';


@Entity()
export  class BlogEntity extends  BaseEntity{

  // 系统信息 😁
  @PrimaryGeneratedColumn() id:number;
  //创建日期
  @CreateDateColumn() gen:Date;
  //修改日期
  @UpdateDateColumn() update:Date;

  //标题
  @Column() title:string;
  //html
  @Column({type:'mediumtext'})  html:string;
  //简介
  @Column() des:string;
  //点赞
  @Column({default:0}) likes :number

  @ManyToMany(type => TagEntity,tag=>tag.blogs)
  tags:TagEntity[]
}
