import { Expose } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class AnalyticsDto {
  @IsBoolean()
  @Expose({ name: 'google_analytics_enabled', toPlainOnly: true })
  GoogleAnalyticsEnabled: boolean;
}

export class UpdateAnalyticsDto extends AnalyticsDto {}
