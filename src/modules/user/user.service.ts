import { Inject, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class UserService {
  constructor() // private readonly userRepository: Repository<User>, // @InjectRepository(User, 'home')

  // @InjectRepository(Book)
  // private readonly bookRepository: Repository<Book>,
  {}

  async findOne() {
    return 111;
    // Logger.warn('----测试111---');
    // const home = await this.userRepository.findOne({
    //   where: { id: 1 },
    // });
    // const local = await this.bookRepository.findOne({
    //   where: { id: 1 },
    // });
    // return {
    //   home,
    //   local,
    // };
  }
}
