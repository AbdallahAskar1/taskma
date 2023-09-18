// src/user/user.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async registerUser(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    const existingUser = await this.userService.findUserByUsername(username);

    if (existingUser) {
      return { message: 'Username is already taken', status:false };
    }

    const newUser = await this.userService.createUser(username, password);
    return { message: 'User registered successfully', user: newUser };
  }
}
