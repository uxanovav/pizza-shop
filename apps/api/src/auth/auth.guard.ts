import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { isEmpty, isNil } from 'lodash';
import { Observable } from 'rxjs';
import { ROLE_KEY } from './roles.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.getAllAndOverride(ROLE_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    const req = context.switchToHttp().getRequest();

    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(' ');
    const isCorrectToken = bearer === 'Bearer' && !isEmpty(token);

    if (!isCorrectToken) {
      throw new UnauthorizedException('User not authorized');
    }

    const user = this.jwtService.verify(token);
    req.user = user;

    if (isNil(role)) {
      return true;
    }

    if (user.role === role) {
      return true;
    } else {
      throw new HttpException('Access denied', HttpStatus.FORBIDDEN);
    }
  }
}
