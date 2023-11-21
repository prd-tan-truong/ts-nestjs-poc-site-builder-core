import {
  Controller,
  Get,
  Param,
  Query,
  Body,
  SerializeOptions,
  Put,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service';
import { ConditionalValidationPipe } from './pipes/conditional-validation.pipe';
import { SiteSettingsDto } from './dto/site-settings.dto';
import { GetSettingsQueryParamsDto } from './dto/get-settings-query-params.dto';
import { SiteSettingSerializerInterceptor } from './interceptors/site-settings.interceptor';

@Controller('site-settings')
export class SiteSettingsController {
  constructor(private readonly siteSettingsService: SiteSettingsService) {}

  @Put(':id')
  async updateSettingOfSite(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ConditionalValidationPipe())
    updateSiteSettingsDto: any,
  ) {
    await this.siteSettingsService.update(id, updateSiteSettingsDto);
    return updateSiteSettingsDto;
  }

  @Get(':id')
  @SerializeOptions({
    excludeExtraneousValues: true,
  })
  @UseInterceptors(SiteSettingSerializerInterceptor)
  async getSiteSettings(
    @Param('id', ParseIntPipe) id: number,
    @Query() query: GetSettingsQueryParamsDto,
  ): Promise<SiteSettingsDto> {
    const data: SiteSettingsDto = await this.siteSettingsService.get(
      id,
      query.type,
    );
    return data;
  }
}
