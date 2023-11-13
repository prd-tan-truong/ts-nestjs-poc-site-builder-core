import { Injectable } from '@nestjs/common';
import { SiteRepository } from './sites.repository';

@Injectable()
export class SitesService {
  constructor(private readonly siteRepository: SiteRepository) {}
  async getSites() {
    return this.siteRepository.getSites();
  }

  async getSite(id: number) {
    return this.siteRepository.getSite(id);
  }
}
