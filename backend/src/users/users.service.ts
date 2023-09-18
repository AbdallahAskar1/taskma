import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async registerUser(username: string, password: string): Promise<any> {
    // Implement registration logic here, e.g., store user in the database.
  }

  async loginUser(username: string, password: string): Promise<any> {
    // Implement login logic here, e.g., verify credentials.
  }
}
