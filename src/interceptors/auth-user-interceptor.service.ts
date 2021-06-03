import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { ContextService } from '../providers/context.service';
import { UserEntity } from '../shared/entities/user.entity';

@Injectable()
export class AuthUserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    const user = <UserEntity>request.user;
    ContextService.setAuthUser(user);

    return next.handle();
  }
}
