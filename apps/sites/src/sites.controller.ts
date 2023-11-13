import { Controller, Get, Logger, Param } from '@nestjs/common';
import { SitesService } from './sites.service';
import SiteModel from './models/site.model';

@Controller('sites')
export class SitesController {
  protected readonly logger = new Logger(SitesController.name);

  constructor(private readonly sitesService: SitesService) {}

  @Get()
  async getSites(): Promise<SiteModel[]> {
    const results = await this.sitesService.getSites();
    return results;
  }

  @Get(':id')
  async getSite(@Param('id') id: number): Promise<SiteModel> {
    return await this.sitesService.getSite(id);
  }
}
