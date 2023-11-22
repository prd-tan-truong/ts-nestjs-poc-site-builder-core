import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OliviaSystemAttribute } from '../interfaces/olivia-system-attribute.interface';

@Injectable()
export class OliviaSystemAttributesService {
  constructor(private readonly configService: ConfigService) {}

  async getSystemAttributesOfCompany(
    cem_account_id: number,
  ): Promise<OliviaSystemAttribute[]> {
    const header = new Headers();
    header.append(
      'Authorization',
      'Token 5J3C4PGWZ8CQ9WI44YRAXADT9DHW4JCHOSTQUOLO',
    );
    header.append('CompanyId', cem_account_id.toString());
    const res = await fetch(
      `https://${this.configService.getOrThrow(
        'OLIVIA_DOMAIN',
      )}/api/v1/settings/system-attribute-key?attribute_type=4&limit=20`,
      {
        method: 'GET',
        headers: header,
        redirect: 'follow',
      },
    );
    if (res.ok) {
      return res.json();
    } else {
      console.log(res.text());
      throw new Error('Error from Olivia service.');
    }
  }

  // OUTPUT:
  /*
  {
        "attribute_name": "Company Name",
        "default_value": "Some value",
        "description": "Company Name",
        "key_name": "company_name",
        "category": "standard"
    }
  */
  async getListSaFromOlivia(cem_account_id: number) {
    const data: OliviaSystemAttribute[] =
      await this.getSystemAttributesOfCompany(cem_account_id);
    return data.map(({ label, description, key_name, category }) => ({
      attribute_name: label,
      default_value: null,
      description,
      key_name,
      category,
    }));
  }
}
