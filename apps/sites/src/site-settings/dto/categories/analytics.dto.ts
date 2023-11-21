import { Expose } from 'class-transformer';
import { IsBoolean } from 'class-validator';

export class AnalyticsDto {
  @IsBoolean({ groups: ['analytics'] })
  @Expose({ name: 'google_analytics_enaled', toPlainOnly: true })
  GoogleAnalyticsEnabled: boolean;
}
