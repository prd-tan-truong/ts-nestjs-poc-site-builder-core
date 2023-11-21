import { Exclude, Expose } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';

@Exclude()
export class CspDto {
  // CSP
  @IsString({ groups: ['csp'] })
  @Expose({ name: 'content_security_policy', toPlainOnly: true })
  ContentSecurityPolicy: boolean;

  @IsBoolean({ groups: ['csp'] })
  @Expose({ name: 'content_security_policy_enabled', toPlainOnly: true })
  ContentSecurityPolicyEnabled: boolean;

  @IsString({ groups: ['csp'] })
  @Expose({ name: 'preview_content_security_policy', toPlainOnly: true })
  PreviewContentSecurityPolicy: boolean;

  @IsBoolean({ groups: ['csp'] })
  @Expose({
    name: 'preview_content_security_policy_enabled',
    toPlainOnly: true,
  })
  PreviewContentSecurityPolicyEnabled: boolean;
}
