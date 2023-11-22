import { IntersectionType } from '@nestjs/swagger';
import { AnalyticsDto } from './categories/analytics.dto';
import { CspDto } from './categories/csp.dto';
import { DomainDto } from './categories/domain.dto';
import { FaviconDto } from './categories/favicon.dto';
import { PrivacyDto } from './categories/privacy.dto';
import { RedirectDto } from './categories/redirect.dto';
import { AttributesDbDto } from './categories/attributes.dto';

export class SiteSettingsDto extends IntersectionType(
  AnalyticsDto,
  CspDto,
  DomainDto,
  FaviconDto,
  PrivacyDto,
  RedirectDto,
  AttributesDbDto,
) {}
