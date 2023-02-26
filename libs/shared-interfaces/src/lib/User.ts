export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export interface IUserCreate {
  email: string;
  password: string;
  role: UserRole;
}
