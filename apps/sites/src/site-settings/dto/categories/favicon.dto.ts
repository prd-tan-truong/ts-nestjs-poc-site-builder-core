import { Expose } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';

export class FaviconDto {
  // Analytics
  @IsString({ groups: ['favicon'] })
  @MaxLength(2500, { groups: ['favicon'] })
  @Expose({ name: 'favicon_url', toPlainOnly: true })
  FaviconURL: string;
}
