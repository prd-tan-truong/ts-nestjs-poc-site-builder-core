import { Transform } from 'class-transformer';

export class AttributesDbDto {
  @Transform(({ value }) => JSON.parse(value))
  Attributes: object;
}

export class AttributesDto {
  // "attribute_name": "Company Name",
  // "default_value": "Some value",
  // "description": "Company Name",
  //     "key_name": "company_name",
  //     "category": "standard"
  attributeName: string;
  defaultValue: string | null;
  description: string;
  key_name: string;
  category: string;
}
