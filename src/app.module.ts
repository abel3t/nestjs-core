import './boilerplate.polyfill';

import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';

import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    AuthModule,
    SharedModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10
    })
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(contextMiddleware).forRoutes('*');
  }
}
