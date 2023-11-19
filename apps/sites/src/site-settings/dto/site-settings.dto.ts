import { AnalyticsDto } from './analytics.dto';
import { CspDto } from './csp.dto';
import { DomainDto } from './domain.dto';
import { FaviconDto } from './favicon.dto';
import { PrivacyDto } from './privacy.dto';
import { RedirectDto } from './redirect.dto';

export type SiteSettingsDto =
  | AnalyticsDto
  | CspDto
  | DomainDto
  | FaviconDto
  | PrivacyDto
  | RedirectDto[];

export type UpdateSiteSettingsDto = SiteSettingsDto;
