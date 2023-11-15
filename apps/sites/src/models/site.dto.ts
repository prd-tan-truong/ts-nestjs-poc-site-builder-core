import { Expose } from 'class-transformer';

export default class SiteDto {
  PK_CareerSiteID: number;

  @Expose({ name: 'crm_company_id', toPlainOnly: true })
  CompanyID?: number;
  Name: string;
  CompanyName: string;
  CEMAccountID: number;
  PublishStatus: string;
  IsActive: boolean;
  CreatedBy: string;
  DateCreated: Date;
  UpdatedBy: string;
  LastUpdated: Date;
  PublishedBy: string;
  LastPublished: Date;
  CEMSystemID: string;

  CEMAccountUUID: string;
}
