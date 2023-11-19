import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { SiteSettings } from './models/site-setting.entity';
import { DtoFactory } from './utils/dto-factory.util';
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
    const dtoClass = DtoFactory.getDto(type);
    const [results]: object[] = await this.dataSource.query(
      `EXECUTE [dbo].[CareerSite_Setting_Get]
      @CompanyId = @0,
      @Type = @1
      `,
      [id, type.toString()],
    );
    console.log(results);
    return plainToInstance<SiteSettingsDto, object>(dtoClass, results);
  }

  // async updateSiteSettings(
  //   id: number,
  //   type: SettingType,
  //   data: Settings,
  // ): Promise<Settings> {
  //   let result: object;
  //   switch (type) {
  //     case SettingType.ANALYTICS:
  //     case SettingType.CSP:
  //     case SettingType.PRIVACY:
  //     case SettingType.FAVICON:
  //       result = await this.dataSource.query(
  //         `EXECUTE [dbo].[CareerSite_Setting_Attribute_Update]
  //         @CompanyID = @0,
  //         @Password = @1,
  //         @PasswordEnabled = @2,
  //         @PreviewContentSecurityPolicyEnabled = @3,
  //         @PreviewContentSecurityPolicy = @4,
  //         @ContentSecurityPolicyEnabled = @5,
  //         @ContentSecurityPolicy = @6,
  //         @GlobalUserTrackingEnabled = @7,
  //         @JobSearchTrackingEnabled = @8,
  //         @SourceTrackingEnabled = @9,
  //         @GDPRBannerEnabled = @10,
  //         @GDPRBannerContent = @11,
  //         @NoIndexEnabled = @12,
  //         @NoFollowEnabled = @13,
  //         @GoogleAnalyticsEnabled = @14,
  //         @FaviconURL = @15,
  //         @UpdatedBy = @16,
  //         `,
  //         [id, ...[]],
  //       );
  //   }
  // }
}
