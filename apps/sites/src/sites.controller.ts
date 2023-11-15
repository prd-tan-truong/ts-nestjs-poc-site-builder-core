import { Controller, Get, Logger, Param } from '@nestjs/common';
import { SitesService } from './sites.service';
import SiteDto from './models/site.dto';
import { PaginatedResource } from '@app/common';

@Controller('sites')
export class SitesController {
  protected readonly logger = new Logger(SitesController.name);

  constructor(private readonly sitesService: SitesService) {}

  @Get()
  async getSites(): Promise<PaginatedResource<SiteDto>> {
    const data: SiteDto[] = await this.sitesService.getSites();
    return {
      _meta: {
        totalItems: 10,
        page: 0,
        limit: 10,
      },
      items: data,
    };
  }

  @Get('list')
  async getSitesList(): Promise<SiteDto[]> {
    return await this.sitesService.getSites();
  }

  @Get(':id')
  async getSite(@Param('id') id: number): Promise<SiteDto> {
    const data = await this.sitesService.getSite(id);
    return data;
  }
}
