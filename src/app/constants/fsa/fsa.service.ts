import { GeneralInfoComponent } from "../../modules/fsa/forms/general-info/general-info.component";
import { OnlineOeComponent } from "../../modules/fsa/forms/online-oe/online-oe.component";
import { SummaryComponent } from "../../modules/fsa/forms/summary/summary.component";

export enum FSA_ENUM {
  GENERAL_INFO,
  ONLINE_OE,
  SUMMARY
}

export const FSA_FORM_SERIES: object = {
  GENERAL_INFO: GeneralInfoComponent,
  ONLINE_OE: OnlineOeComponent,
  SUMMARY: SummaryComponent
}