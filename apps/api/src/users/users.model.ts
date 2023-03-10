import { ApiProperty } from '@nestjs/swagger';
import {
  UserRole,
  IUserCreate,
} from '@pizza-shop/shared-interfaces/src/lib/User';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User, IUserCreate> {
  @ApiProperty({ example: 1 })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: 'example@example.com' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @ApiProperty({ example: 'qweasd123123' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @ApiProperty({ example: UserRole.USER })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: UserRole;
}
