import { ETypeDocument } from 'core/model/enums/type-document.enum';

export interface IUser {
  name: string;
  lastName: string;
  birthDay: string;
  typeDocument: ETypeDocument;
  documentNumber: string;
  phone: string;
}
