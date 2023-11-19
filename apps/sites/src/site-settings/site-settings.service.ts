import { Injectable } from '@nestjs/common';
import { SiteSettingsRepository } from './site-settings.repository';
import { SettingType } from './constants/setting-type.constant';

@Injectable()
export class SiteSettingsService {
  constructor(private readonly siteSettingRepository: SiteSettingsRepository) {}
  async get(siteId: number, type: SettingType) {
    return await this.siteSettingRepository.getSiteSettings(siteId, type);
  }
}
