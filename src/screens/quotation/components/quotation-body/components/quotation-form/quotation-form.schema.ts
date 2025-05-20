import { DOCUMENT_TYPE_DNI } from 'core/constants/document-type.constants';
import {
  TEXT_FIELD_AGREE_ERROR,
  TEXT_FIELD_REQUIRED_ERROR,
  textFieldLenghtError,
  textFieldMaxError,
  textFieldMinError,
} from 'core/constants/error-messages.constants';
import { ETypeDocument } from 'core/model/enums/type-document.enum';
import * as yup from 'yup';

export const schema = yup.object({
  typeDocument: yup.mixed<ETypeDocument>().required(TEXT_FIELD_REQUIRED_ERROR),
  documentNumber: yup
    .string()
    .trim()
    .required(TEXT_FIELD_REQUIRED_ERROR)
    .when('typeDocument', ([typeDocument], schema) =>
      typeDocument === DOCUMENT_TYPE_DNI
        ? schema.length(8, textFieldLenghtError(8))
        : schema.min(7, textFieldMinError(7)).max(20, textFieldMaxError(20)),
    ),
  phone: yup.string().trim().required(TEXT_FIELD_REQUIRED_ERROR).length(9, textFieldLenghtError(9)),
  privacyPolicy: yup.bool().oneOf([true], TEXT_FIELD_AGREE_ERROR),
  tradePolicy: yup.bool().oneOf([true], TEXT_FIELD_AGREE_ERROR),
});
