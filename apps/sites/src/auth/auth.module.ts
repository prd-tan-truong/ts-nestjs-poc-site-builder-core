import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './strategies/basic.strategy';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        HTTP_BASIC_USER: Joi.string().required(),
        HTTP_BASIC_PASS: Joi.string().required(),
      }),
    }),
  ],
  providers: [BasicStrategy],
})
export class AuthModule {}
