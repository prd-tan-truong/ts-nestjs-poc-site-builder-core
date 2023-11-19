import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsString, MaxLength, ValidateIf } from 'class-validator';

export class PrivacyDto {
  // Privacy
  @IsBoolean()
  @Expose({ name: 'global_user_tracking_enabled' })
  globalUserTrackingEnabled: boolean;

  @IsBoolean()
  @Expose({ name: 'job_search_tracking_enabled' })
  jobSearchTrackingEnabled: boolean;

  @IsBoolean()
  @Expose({ name: 'source_tracking_enabled' })
  sourceTrackingEnabled: boolean;

  @IsString()
  @MaxLength(320)
  @ValidateIf((_, value) => value !== null)
  @Expose({ name: 'gdpr_banner_content' })
  gdprBannerContent: string;

  @IsBoolean()
  @Expose({ name: 'gdpr_banner_enabled' })
  gdprBannerEnabled: boolean;

  @IsString()
  @MaxLength(50)
  @Expose({ name: 'password' })
  password: string;

  @IsBoolean()
  @Expose({ name: 'password_enabled' })
  passwordEnabled: boolean;

  @Exclude()
  noIndexEnabled: boolean;

  @Exclude()
  noFollowEnabled: boolean;

  @Expose({ name: 'no_index_no_follow_enabled' })
  get noIndexNoFollowEnabled(): boolean {
    return this.noIndexEnabled && this.noFollowEnabled;
  }
}

export class UpdatePrivacyDto extends PrivacyDto {}
