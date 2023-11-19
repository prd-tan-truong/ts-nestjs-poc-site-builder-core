import { Expose } from 'class-transformer';
import { IsString, MaxLength } from 'class-validator';

export class FaviconDto {
  // Analytics
  @IsString()
  @MaxLength(2500)
  @Expose({ name: 'favicon_url', toPlainOnly: true })
  FaviconURL: string;
}

export class UpdateFaviconDto extends FaviconDto {}
