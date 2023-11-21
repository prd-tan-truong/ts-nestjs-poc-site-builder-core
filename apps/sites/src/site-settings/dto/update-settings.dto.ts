import { IsEnum } from 'class-validator';
import { SiteSettingsDto } from './site-settings.dto';
import { SettingType } from '../constants/setting-type.constant';
import { Type } from 'class-transformer';

export class UpdateSiteSettingsDto {
  @Type(() => SiteSettingsDto)
  data: SiteSettingsDto;

  @IsEnum(SettingType, { always: true })
  type: SettingType;
}
