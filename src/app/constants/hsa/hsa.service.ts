import { SummaryComponent } from "../../modules/hsa/forms/summary/summary.component";
import { HsaComponent } from "../../modules/hsa/forms/hsa/hsa.component";

export enum HSA_ENUM {
  HSA,
  SUMMARY
}

export const HSA_FORM_SERIES: object = {
  HSA: HsaComponent,
  SUMMARY: SummaryComponent
}