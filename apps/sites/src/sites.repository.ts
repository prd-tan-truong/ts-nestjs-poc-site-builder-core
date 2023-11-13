import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { Site } from './models/site.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, EntityManager, Repository } from 'typeorm';

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

  async getSites() {
    return await this.dataSource.query(
      'SELECT TOP (10) * FROM [Jobing].[dbo].[CareerSite]',
    );
  }

  async getSite(id: number) {
    const query = 'EXECUTE [dbo].[CareerSite_Get] @0';
    return await this.dataSource.query(query, [id]);
  }
}
