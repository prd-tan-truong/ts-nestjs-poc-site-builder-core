import { Expose, Transform } from 'class-transformer';
import { IsString, MaxLength, ValidateIf } from 'class-validator';

export class DomainDto {
  @IsString({ groups: ['domain'] })
  @MaxLength(253, { groups: ['domain'] })
  @Expose({ name: 'domain', toPlainOnly: true })
  Domain: string | null;

  @Expose({ name: 'base_domain', groups: ['domain'], toPlainOnly: true })
  @Transform(() => 'sites.dev-internal.paradox.ai', {
    toPlainOnly: true,
  })
  BaseDomain: string;

  @Expose({ name: 'is_custom_domain', groups: ['domain'], toPlainOnly: true })
  @Transform(({ obj }) => !(obj.Domain as string)?.endsWith('.paradox.ai'), {
    toPlainOnly: true,
  })
  IsCustomDomain: boolean;

  @Expose({ name: 'preview_domain', groups: ['domain'], toPlainOnly: true })
  @Transform(
    ({ obj }) =>
      `${obj.CompanyUniqueName}.preview.sites.dev-internal.paradox.ai`,
    {
      toPlainOnly: true,
    },
  )
  PreviewDomain: string;

  @Expose({
    name: 'company_unique_name',
    groups: ['domain'],
    toPlainOnly: true,
  })
  @MaxLength(300, { groups: ['domain'] })
  CompanyUniqueName: string;

  @IsString({ groups: ['domain'] })
  @Expose({ name: 'certificate_status', toPlainOnly: true })
  @ValidateIf((_, value) => value !== null)
  CertificateStatus: string;
}
