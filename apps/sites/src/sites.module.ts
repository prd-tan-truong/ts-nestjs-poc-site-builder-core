import { Module } from '@nestjs/common';
import { SitesController } from './sites.controller';
import { SitesService } from './sites.service';
import {
  DatabaseModule,
  GlobalExceptionFilter,
  HealthModule,
  LoggerModule,
} from '@app/common';
import { Site } from './models/site.entity';
import { SiteRepository } from './sites.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { SiteSettingsModule } from './site-settings/site-settings.module';

@Module({
  imports: [
    HealthModule,
    LoggerModule,
    DatabaseModule,
    DatabaseModule.forFeature([Site]),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        APP_PORT: Joi.number().required(),
        MSSQL_HOST: Joi.string().required(),
        MSSQL_PORT: Joi.number().required(),
        MSSQL_DATABASE: Joi.string().required(),
        MSSQL_USERNAME: Joi.string().required(),
        MSSQL_PASSWORD: Joi.string().required(),
      }),
    }),
    AuthModule,
    SiteSettingsModule,
  ],
  controllers: [SitesController],
  providers: [
    SitesService,
    SiteRepository,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class SitesModule {}
