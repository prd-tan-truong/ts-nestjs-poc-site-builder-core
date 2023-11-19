import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

@Exclude()
export class CspDto {
  // CSP
  @IsString()
  @Expose({ name: 'content_security_policy', toPlainOnly: true })
  ContentSecurityPolicy: boolean;

  @IsBoolean()
  @Expose({ name: 'content_security_policy_enabled', toPlainOnly: true })
  ContentSecurityPolicyEnabled: boolean;

  @IsString()
  @Expose({ name: 'preview_content_security_policy', toPlainOnly: true })
  PreviewContentSecurityPolicy: boolean;

  @IsBoolean()
  @Expose({
    name: 'preview_content_security_policy_enabled',
    toPlainOnly: true,
  })
  PreviewContentSecurityPolicyEnabled: boolean;
}

export class UpdateCspDto extends CspDto {}
