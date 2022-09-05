import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { Public } from 'src/metadata/is-public.key';
import { CreateUserDTO } from './dto/in/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/')
  getAll() {
    return this.usersService.findOneByEmail('quasar02@icloud.com');
  }

  @Public()
  @Post('/create')
  create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }
}
