import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BlogEntity } from '../blog/blog.entity';

@Entity()
export  class TagEntity extends  BaseEntity{

  // 系统信息 😁
  @PrimaryGeneratedColumn() id:number;
  //创建日期
  @CreateDateColumn() gen:Date;
  //修改日期
  @UpdateDateColumn() update:Date;

  //标题
  @Column() name:string;

  //简介
  @Column() des:string;

  @ManyToMany(type => BlogEntity,blog=>blog.tags)
  @JoinTable()
  blogs:BlogEntity[]


}
