import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  SerializeOptions,
} from '@nestjs/common';
import { SiteSettingsService } from './site-settings.service';
import { ConditionalValidationPipe } from './pipes/conditional-validation.pipe';
import { SettingType } from './constants/setting-type.constant';
import {
  SiteSettingsDto,
  UpdateSiteSettingsDto,
} from './dto/site-settings.dto';

@Controller('site-settings')
export class SiteSettingsController {
  constructor(private readonly siteSettingsService: SiteSettingsService) {}

  @Post(':id')
  createSettingOfSite(
    @Param('id') id: string,
    @Body(new ConditionalValidationPipe()) data: UpdateSiteSettingsDto,
  ) {
    console.log(data);
    return data;
  }

  @Get(':id')
  @SerializeOptions({ excludeExtraneousValues: true })
  async getSiteSettings(
    @Param('id') id: string,
    @Query('type') type: SettingType,
  ): Promise<SiteSettingsDto> {
    const data: SiteSettingsDto = await this.siteSettingsService.get(+id, type);
    // const dtoClass = DtoFactory.getDto(type);
    return data;
  }
}
