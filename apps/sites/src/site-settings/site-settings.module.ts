import { Module } from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service';
import { SiteSettingsController } from './site-settings.controller';
import { DatabaseModule, HealthModule, LoggerModule } from '@app/common';
import { SiteSettings } from './models/site-setting.entity';
import { SiteSettingsRepository } from './site-settings.repository';

@Module({
  imports: [
    LoggerModule,
    HealthModule,
    DatabaseModule,
    DatabaseModule.forFeature([SiteSettings]),
  ],
  controllers: [SiteSettingsController],
  providers: [SiteSettingsService, SiteSettingsRepository],
  exports: [SiteSettingsService],
})
export class SiteSettingsModule {}
