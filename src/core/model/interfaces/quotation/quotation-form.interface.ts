import { ETypeDocument } from 'core/model/enums/type-document.enum';

export interface IQuotationForm {
  typeDocument: ETypeDocument;
  documentNumber: string;
  phone: string;
  privacyPolicy: boolean;
  tradePolicy: boolean;
}
