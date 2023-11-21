import { Exclude, Expose, Transform } from 'class-transformer';
import { IsBoolean, IsString, MaxLength, ValidateIf } from 'class-validator';

export class PrivacyDto {
  // Privacy
  @IsBoolean({ groups: ['privacy'] })
  @Expose({
    name: 'global_user_tracking_enabled',
    groups: ['privacy'],
    toPlainOnly: true,
  })
  GlobalUserTrackingEnabled: boolean;

  @IsBoolean({ groups: ['privacy'] })
  @Expose({
    name: 'job_search_tracking_enabled',
    groups: ['privacy'],
    toPlainOnly: true,
  })
  JobSearchTrackingEnabled: boolean;

  @IsBoolean({ groups: ['privacy'] })
  @Expose({
    name: 'source_tracking_enabled',
    groups: ['privacy'],
    toPlainOnly: true,
  })
  SourceTrackingEnabled: boolean;

  @IsString({ groups: ['privacy'] })
  @MaxLength(320, { groups: ['privacy'] })
  @ValidateIf((_, value) => value !== null, { groups: ['privacy'] })
  @Expose({
    name: 'gdpr_banner_content',
    groups: ['privacy'],
    toPlainOnly: true,
  })
  GDPRBannerContent: string;

  @IsBoolean({ groups: ['privacy'] })
  @Expose({
    name: 'gdpr_banner_enabled',
    groups: ['privacy'],
    toPlainOnly: true,
  })
  GDPRBannerEnabled: boolean;

  @IsString({ groups: ['privacy'] })
  @MaxLength(50, { groups: ['privacy'] })
  @Expose({ name: 'password', groups: ['privacy'], toPlainOnly: true })
  Password: string;

  @IsBoolean({ groups: ['privacy'] })
  @Expose({ name: 'password_enabled', groups: ['privacy'], toPlainOnly: true })
  PasswordEnabled: boolean;

  @IsBoolean({ groups: ['privacy'] })
  @Exclude({ toPlainOnly: true })
  NoIndexEnabled: boolean;

  @IsBoolean({ groups: ['privacy'] })
  @Exclude({ toPlainOnly: true })
  NoFollowEnabled: boolean;

  @Expose({
    name: 'no_index_no_follow_enabled',
    groups: ['privacy'],
    toPlainOnly: true,
  })
  @Transform(({ obj }) => obj.NoFollowEnabled && obj.NoFollowEnabled, {
    toPlainOnly: true,
  })
  NoIndexNoFollowEnabled: boolean;
}
