import { CompanyComponent } from "../../modules/company/forms/company/company.component";
import { MatricsComponent } from "../../modules/company/forms/matrics/matrics.component";
import { ContactsComponent } from "../../modules/company/forms/contacts/contacts.component";
import { AffiliatesComponent } from "../../modules/company/forms/affiliates/affiliates.component";
import { DepartmentsComponent } from "../../modules/company/forms/departments/departments.component";
import { PayScheduleComponent } from "../../modules/company/forms/pay-schedule/pay-schedule.component";
import { FileFeedComponent } from "../../modules/company/forms/file-feed/file-feed.component";
import { SummaryComponent } from "../../modules/company/forms/summary/summary.component";

export enum COMPANY_ENUM {
  COMPANY,
  MATRICS,
  CONTACTS,
  AFFILIATES,
  DEPARTMENTS,
  PAY_SCHEDULE,
  FILE_FEED,
  SUMMARY
}

export const COMPANY_FORM_SERIES: object = {
  COMPANY: CompanyComponent,
  MATRICS: MatricsComponent,
  CONTACTS: ContactsComponent,
  AFFILIATES: AffiliatesComponent,
  DEPARTMENTS: DepartmentsComponent,
  PAY_SCHEDULE: PayScheduleComponent,
  FILE_FEED: FileFeedComponent,
  SUMMARY: SummaryComponent
}