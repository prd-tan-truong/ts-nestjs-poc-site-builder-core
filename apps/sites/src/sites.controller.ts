import { Controller, Get } from '@nestjs/common';
import { SitesService } from './sites.service';

@Controller()
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get()
  getHello(): string {
    return this.sitesService.getHello();
  }
}
