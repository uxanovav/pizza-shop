import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserService } from '../users/users.service';
import bcrypt from 'bcryptjs';
import { isEmpty } from 'lodash';
import { User } from '../users/users.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(authDto: CreateUserDto) {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (!isEmpty(candidate)) {
      throw new HttpException('Email already taken', HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(userDto.password, 5);

    const user = await this.userService.createUser({
      ...userDto,
      password: hashedPassword,
    });
    return await this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, role: user.role };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(authDto: CreateUserDto) {
    const user = await this.userService.getUserByEmail(authDto.email);

    const isPasswordEquals = await bcrypt.compare(
      authDto.password,
      user.password
    );
    if (isPasswordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Incorrect login or password' });
  }
}
