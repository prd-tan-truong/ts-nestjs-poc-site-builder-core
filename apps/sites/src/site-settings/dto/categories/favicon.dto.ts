import { Expose } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';
import { SettingType } from '../../constants/setting-type.constant';

export class FaviconDto {
  // Analytics
  @IsString({ groups: [SettingType.FAVICON] })
  @MaxLength(2500, { groups: [SettingType.FAVICON] })
  @Expose({ name: 'favicon_url', toPlainOnly: true })
  FaviconURL: string;
}
