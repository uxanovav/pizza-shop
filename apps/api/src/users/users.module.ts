import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from '../auth/auth.module';
import { UserController } from './users.controller';
import { User } from './users.model';
import { UserService } from './users.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User]), AuthModule],
  exports: [UserService],
})
export class UserModule {}
