import { BlogEntity } from './blog.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(BlogEntity)
export  class BlogRepository extends  Repository<BlogEntity>{

}
