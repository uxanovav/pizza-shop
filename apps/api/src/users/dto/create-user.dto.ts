import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { UserRole } from '../users.model';

export class CreateUserDto {
  @ApiProperty({ type: 'string', format: 'string', required: true })
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string', format: 'string', required: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @ApiProperty({ type: 'string', enum: UserRole, required: true })
  @IsEnum(UserRole)
  role: UserRole;
}
