import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';



@Entity()
export  class Weibo extends  BaseEntity{

  //系统信息 😁
  @PrimaryGeneratedColumn() id:number;
  @CreateDateColumn() gen;


  //基本信息

  @Column({type:'text'})  content:string;

  @Column({default:0}) likes :number


  @Column({default:''})  images:string


}
