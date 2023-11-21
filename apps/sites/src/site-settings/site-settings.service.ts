import { Injectable } from '@nestjs/common';
import { SiteSettingsRepository } from './site-settings.repository';
import { SettingType } from './constants/setting-type.constant';
import { UpdateSiteSettingsDto } from './dto/update-settings.dto';

@Injectable()
export class SiteSettingsService {
  constructor(private readonly siteSettingRepository: SiteSettingsRepository) {}
  async get(siteId: number, type: SettingType) {
    return await this.siteSettingRepository.getSiteSettings(siteId, type);
  }

  async update(siteId: number, data: UpdateSiteSettingsDto) {
    return await this.siteSettingRepository.updateSiteSettings(
      siteId,
      data.type,
      data.data,
    );
  }
}
