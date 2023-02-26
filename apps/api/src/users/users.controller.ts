import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/roles.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

import { UserService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get users list' })
  @ApiResponse({ status: 201, type: [User] })
  @Role('ADMIN')
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.userService.getAll();
  }
}
