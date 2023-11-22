import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        OLIVIA_DOMAIN: Joi.string().required(),
      }),
    }),
  ],
})
export class OliviaModule {}
