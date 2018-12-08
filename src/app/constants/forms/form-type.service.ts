import { COMPANY_FORM_SERIES, COMPANY_ENUM } from "../comapny/company.service";
import { FSA_FORM_SERIES, FSA_ENUM } from "../fsa/fsa.service";
import { HSA_ENUM, HSA_FORM_SERIES } from "../hsa/hsa.service";

export enum FORM_TYPES {
  COMPANY,
  FSA,
  HSA
}

export const FORM_TYPES_SERIES_ENUM = {
  COMPANY: {
    fSeries: COMPANY_FORM_SERIES, 
    fEnum: COMPANY_ENUM
  },
  FSA: {
    fSeries: FSA_FORM_SERIES,
    fEnum: FSA_ENUM
  },
  HSA: {
    fSeries: HSA_FORM_SERIES,
    fEnum: HSA_ENUM
  }
}