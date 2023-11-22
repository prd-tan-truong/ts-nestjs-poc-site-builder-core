import { Expose } from 'class-transformer';
import { IsBoolean } from 'class-validator';
import { SettingType } from '../../constants/setting-type.constant';

export class AnalyticsDto {
  @IsBoolean({ groups: [SettingType.ANALYTICS] })
  @Expose({ name: 'google_analytics_enaled', toPlainOnly: true })
  GoogleAnalyticsEnabled: boolean;
}
