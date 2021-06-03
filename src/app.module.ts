import './boilerplate.polyfill';

import type { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { contextMiddleware } from './middlewares';
import { AuthModule } from './modules/auth/auth.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    AuthModule,
    SharedModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(contextMiddleware).forRoutes('*');
  }
}
