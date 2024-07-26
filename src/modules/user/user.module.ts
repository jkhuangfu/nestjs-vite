import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Book } from './entities/book.entity';

@Module({
  imports: [
    // TypeOrmModule.forFeature([Book]),
    // TypeOrmModule.forFeature([User], 'home'),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
