import { Expose, Transform } from 'class-transformer';
import { IsString, MaxLength, ValidateIf } from 'class-validator';
import { SettingType } from '../../constants/setting-type.constant';

export class DomainDto {
  @IsString({ groups: [SettingType.DOMAIN] })
  @MaxLength(253, { groups: [SettingType.DOMAIN] })
  @Expose({ name: 'domain', toPlainOnly: true })
  Domain: string | null;

  @Expose({
    name: 'base_domain',
    groups: [SettingType.DOMAIN],
    toPlainOnly: true,
  })
  @Transform(() => 'sites.dev-internal.paradox.ai', {
    toPlainOnly: true,
  })
  BaseDomain: string;

  @Expose({
    name: 'is_custom_domain',
    groups: [SettingType.DOMAIN],
    toPlainOnly: true,
  })
  @Transform(({ obj }) => !(obj.Domain as string)?.endsWith('.paradox.ai'), {
    toPlainOnly: true,
  })
  IsCustomDomain: boolean;

  @Expose({
    name: 'preview_domain',
    groups: [SettingType.DOMAIN],
    toPlainOnly: true,
  })
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
    groups: [SettingType.DOMAIN],
    toPlainOnly: true,
  })
  @MaxLength(300, { groups: [SettingType.DOMAIN] })
  CompanyUniqueName: string;

  @IsString({ groups: [SettingType.DOMAIN] })
  @Expose({ name: 'certificate_status', toPlainOnly: true })
  @ValidateIf((_, value) => value !== null)
  CertificateStatus: string;
}
