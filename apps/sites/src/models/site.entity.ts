import { AbstractEntity } from '@app/common';
import { Entity } from 'typeorm';

@Entity()
export class Site extends AbstractEntity<Site> {}
