import { Exclude } from 'class-transformer';

export default class SiteModel {
  PK_CareerSiteID: number;
  FK_CompanyID: number;
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

  @Exclude()
  CEMAccountUUID: string;
}
