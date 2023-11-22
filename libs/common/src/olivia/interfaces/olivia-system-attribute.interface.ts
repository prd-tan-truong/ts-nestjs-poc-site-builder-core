export enum OliviaSystemAttributeCategory {
  STANDARD_ATTRIBUTE = 1,
  CUSTOM_ATTRIBUTES = 2,
}

export enum OliviaSystemAttributeStatus {
  DISABLED = 0,
  ENABLED = 1,
}

export interface OliviaSystemAttribute {
  id: string;
  created_by: string;
  updated_by: string;
  // cem account id
  company_id: number;
  label: string;
  key_name: string;
  description: string;
  attribute_type: number;
  category: OliviaSystemAttributeCategory;
  created_at: Date;
  updated_at: Date;
  status: OliviaSystemAttributeStatus;
  uuid: string;
}
