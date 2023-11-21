import { IsEnum } from 'class-validator';
import { SettingType } from '../constants/setting-type.constant';

export class GetSettingsQueryParamsDto {
  @IsEnum(SettingType)
  type: SettingType;
}
