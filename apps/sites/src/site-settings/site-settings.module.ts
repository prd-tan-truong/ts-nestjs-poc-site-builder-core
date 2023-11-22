import { Module } from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service';
import { SiteSettingsController } from './site-settings.controller';
import {
  DatabaseModule,
  HealthModule,
  LoggerModule,
  OliviaModule,
} from '@app/common';
import { SiteSettings } from './models/site-setting.entity';
import { SiteSettingsRepository } from './site-settings.repository';
import { OliviaSystemAttributesService } from '@app/common/olivia/services/system-attributes.service';

@Module({
  imports: [
    LoggerModule,
    HealthModule,
    DatabaseModule,
    DatabaseModule.forFeature([SiteSettings]),
    OliviaModule,
  ],
  controllers: [SiteSettingsController],
  providers: [
    SiteSettingsService,
    SiteSettingsRepository,
    OliviaSystemAttributesService,
  ],
  exports: [SiteSettingsService],
})
export class SiteSettingsModule {}
