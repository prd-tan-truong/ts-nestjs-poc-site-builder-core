import { AbstractEntity } from '@app/common/database/abstract.entity';
import { Entity } from 'typeorm';

@Entity()
export class Site extends AbstractEntity<Site> {}
