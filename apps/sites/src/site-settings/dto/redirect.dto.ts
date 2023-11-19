import { Expose } from 'class-transformer';
import {
  IsDate,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export class RedirectDto {
  @IsNumber()
  @Expose({ name: 'redirect_id' })
  redirectId: number;

  @IsString()
  @MaxLength(500)
  @Matches(new RegExp('^/([a-zA-Z0-9-]+(/([a-zA-Z0-9-])+)*/?)?$'))
  @Expose({ name: 'source' })
  source: string;

  @IsString()
  @MaxLength(500)
  destination: string;

  @IsNumber()
  @Expose({ name: 'type' })
  type: number;

  @IsString()
  @Expose({ name: 'publish_state' })
  publishState: string;

  @IsDate()
  @Expose({ name: 'date_created' })
  dateCreated: Date;
}

export class UpdateRedirectDto extends RedirectDto {}
