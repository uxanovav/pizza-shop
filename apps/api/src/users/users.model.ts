import { Column, DataType, Model, Table } from 'sequelize-typescript';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

interface ICreateUserAttributes {
  email: string;
  password: string;
  role: UserRole;
}

@Table({ tableName: 'users' })
export class User extends Model<User, ICreateUserAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  role: UserRole;
}
