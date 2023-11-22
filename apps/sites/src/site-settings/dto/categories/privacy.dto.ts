import { Exclude, Expose, Transform } from 'class-transformer';
import { IsBoolean, IsString, MaxLength, ValidateIf } from 'class-validator';
import { SettingType } from '../../constants/setting-type.constant';

export class PrivacyDto {
  // Privacy
  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'global_user_tracking_enabled',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  GlobalUserTrackingEnabled: boolean;

  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'job_search_tracking_enabled',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  JobSearchTrackingEnabled: boolean;

  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'source_tracking_enabled',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  SourceTrackingEnabled: boolean;

  @IsString({ groups: [SettingType.PRIVACY] })
  @MaxLength(320, { groups: [SettingType.PRIVACY] })
  @ValidateIf((_, value) => value !== null, { groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'gdpr_banner_content',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  GDPRBannerContent: string;

  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'gdpr_banner_enabled',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  GDPRBannerEnabled: boolean;

  @IsString({ groups: [SettingType.PRIVACY] })
  @MaxLength(50, { groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'password',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  Password: string;

  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Expose({
    name: 'password_enabled',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  PasswordEnabled: boolean;

  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Exclude({ toPlainOnly: true })
  NoIndexEnabled: boolean;

  @IsBoolean({ groups: [SettingType.PRIVACY] })
  @Exclude({ toPlainOnly: true })
  NoFollowEnabled: boolean;

  @Expose({
    name: 'no_index_no_follow_enabled',
    groups: [SettingType.PRIVACY],
    toPlainOnly: true,
  })
  @Transform(({ obj }) => obj.NoFollowEnabled && obj.NoFollowEnabled, {
    toPlainOnly: true,
  })
  NoIndexNoFollowEnabled: boolean;
}
