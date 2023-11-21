import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { SiteSettings } from './models/site-setting.entity';
import { SettingType } from './constants/setting-type.constant';
import { SiteSettingsDto } from './dto/site-settings.dto';

@Injectable()
export class SiteSettingsRepository extends AbstractRepository<SiteSettings> {
  protected readonly logger = new Logger(SiteSettingsRepository.name);

  constructor(
    @InjectRepository(SiteSettings)
    siteSettingsRepository: Repository<SiteSettings>,
    @InjectDataSource() private dataSource: DataSource,
    entityManager: EntityManager,
  ) {
    super(siteSettingsRepository, entityManager);
  }

  async getSiteSettings(
    id: number,
    type: SettingType,
  ): Promise<SiteSettingsDto> {
    const [results]: object[] = await this.dataSource.query(
      `EXECUTE [dbo].[CareerSite_Setting_Get]
      @CompanyId = @0,
      @Type = @1
      `,
      [id, type],
    );
    return plainToInstance<SiteSettingsDto, object>(SiteSettingsDto, results, {
      groups: [type.toString()],
    });
  }

  async updateSiteSettings(
    id: number,
    type: SettingType,
    data: SiteSettingsDto,
  ): Promise<SiteSettingsDto> {
    console.log(data);
    console.log(type);
    return;
  }
}
