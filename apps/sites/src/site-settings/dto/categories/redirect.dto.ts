import { Expose } from 'class-transformer';
import { IsNumber, IsString, Matches, MaxLength } from 'class-validator';
import { SettingType } from '../../constants/setting-type.constant';

export class RedirectDto {
  @IsNumber()
  @Expose({
    name: 'redirect_id',
    toPlainOnly: true,
    groups: [SettingType.REDIRECTS],
  })
  PK_CareerSiteRedirectID: number;

  @IsString()
  @MaxLength(500)
  @Matches(new RegExp('^/([a-zA-Z0-9-]+(/([a-zA-Z0-9-])+)*/?)?$'))
  @Expose({
    name: 'source',
    toPlainOnly: true,
    groups: [SettingType.REDIRECTS],
  })
  Source: string;

  @IsString()
  @MaxLength(500)
  Destination: string;

  @IsNumber()
  @Expose({ name: 'type', toPlainOnly: true, groups: [SettingType.REDIRECTS] })
  Type: number;

  @IsString()
  @Expose({
    name: 'publish_state',
    toPlainOnly: true,
    groups: [SettingType.REDIRECTS],
  })
  DateStarted: string;

  @IsString()
  @Expose({
    name: 'publish_state',
    toPlainOnly: true,
    groups: [SettingType.REDIRECTS],
  })
  PublishState: string;
}
