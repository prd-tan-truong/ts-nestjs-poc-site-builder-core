import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';
import { SettingType } from '../../constants/setting-type.constant';

@Exclude()
export class CspDto {
  // CSP
  @IsString({ groups: [SettingType.CSP] })
  @Expose({ name: 'content_security_policy', toPlainOnly: true })
  ContentSecurityPolicy: boolean;

  @IsBoolean({ groups: [SettingType.CSP] })
  @Expose({ name: 'content_security_policy_enabled', toPlainOnly: true })
  ContentSecurityPolicyEnabled: boolean;

  @IsString({ groups: [SettingType.CSP] })
  @Expose({ name: 'preview_content_security_policy', toPlainOnly: true })
  PreviewContentSecurityPolicy: boolean;

  @IsBoolean({ groups: [SettingType.CSP] })
  @Expose({
    name: 'preview_content_security_policy_enabled',
    toPlainOnly: true,
  })
  PreviewContentSecurityPolicyEnabled: boolean;
}
