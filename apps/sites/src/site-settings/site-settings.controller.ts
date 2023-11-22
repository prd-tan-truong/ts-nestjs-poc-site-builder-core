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
import { SiteSettingsDto } from './dto/get-site-settings.dto';
import { GetSettingsQueryParamsDto } from './dto/get-settings-query-params.dto';
import { SiteSettingSerializerInterceptor } from './interceptors/site-settings.interceptor';
import { OliviaSystemAttributesService } from '@app/common/olivia/services/system-attributes.service';
import { SettingType } from './constants/setting-type.constant';

@Controller('site-settings')
export class SiteSettingsController {
  constructor(
    private readonly siteSettingsService: SiteSettingsService,
    private readonly oliviaSystemAttributesService: OliviaSystemAttributesService,
  ) {}

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
    if (query.type === SettingType.ATTRIBUTES) {
      const saAttributes =
        await this.oliviaSystemAttributesService.getListSaFromOlivia(605);
      console.log(saAttributes);
      console.log(data);
    }
    return data;
  }
}
