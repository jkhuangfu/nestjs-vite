import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserPipe } from './user.pipe';
import { CreateCatDto } from './dto/test.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(@Query(new UserPipe()) query: CreateCatDto) {
    console.log('query', query);
    return 111;
    // return process.env;
    return this.userService.findOne();
  }
}
