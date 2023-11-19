import { Expose } from 'class-transformer';
import { IsString, MaxLength, ValidateIf } from 'class-validator';

export class DomainDto {
  @IsString()
  @MaxLength(253)
  @Expose({ name: 'domain' })
  domain: string | null;

  @Expose({ name: 'base_domain' })
  get baseDomain(): string {
    return 'sites.dev-internal.paradox.ai';
  }

  @Expose({ name: 'is_custom_domain' })
  get isCustomDomain(): boolean {
    return true;
  }

  @Expose({ name: 'preview_domain' })
  get previewDomain(): string {
    return `${this.companyUniqueName}.preview.sites.dev-internal.paradox.ai`;
  }

  @Expose({ name: 'company_unique_name' })
  @MaxLength(300)
  companyUniqueName: string;

  @IsString()
  @Expose({ name: 'certificate_status' })
  @ValidateIf((_, value) => value !== null)
  certificateStatus: string;
}

export class UpdateDomainDto extends DomainDto {}
