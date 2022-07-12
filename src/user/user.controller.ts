import { UserService } from './user.service';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { User } from 'src/schemas/user.schema';

@Controller('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  async createUser(@Body() body: User) {
    const data = await this.userService.create(body);
    console.log(data);
  }
}
