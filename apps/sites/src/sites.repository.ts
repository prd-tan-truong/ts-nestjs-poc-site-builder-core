import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Site } from './models/site.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import SiteDto from './models/site.dto';

@Injectable()
export class SiteRepository extends AbstractRepository<Site> {
  protected readonly logger = new Logger(SiteRepository.name);

  constructor(
    @InjectRepository(Site)
    siteRepository: Repository<Site>,
    @InjectDataSource() private dataSource: DataSource,
    entityManager: EntityManager,
  ) {
    super(siteRepository, entityManager);
  }

  async getSites(): Promise<SiteDto[]> {
    const results: object[] = await this.dataSource.query(
      'SELECT TOP (10) * FROM [Jobing].[dbo].[CareerSite]',
    );
    return plainToInstance(SiteDto, results);
  }

  async getSite(id: number): Promise<SiteDto> {
    const [results]: object[] = await this.dataSource.query(
      'EXECUTE [dbo].[CareerSite_Get] @0',
      [id],
    );
    return plainToInstance(SiteDto, results);
  }
}
