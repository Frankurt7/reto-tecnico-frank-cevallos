import { schema } from './quotation-form.schema';
import { IQuotationForm } from 'core/model/interfaces/quotation';
import { ETypeDocument } from 'core/model/enums/type-document.enum';

const schemaMock: IQuotationForm = {
  typeDocument: ETypeDocument.DNI,
  documentNumber: '73019965',
  phone: '987888666',
  privacyPolicy: true,
  tradePolicy: true,
};

describe('Quotation Form Schema', () => {
  it('should be successfull if the schema is valid', async () => {
    const result = await schema.isValid(schemaMock);
    expect(result).toEqual(true);
  });

  it('should be false when the politics are not agree', async () => {
    const schemaMockInvalid = { ...schemaMock, privacyPolicy: false, tradePolicy: false }

    const result = await schema.isValid(schemaMockInvalid);
    expect(result).toEqual(false);
  });

  it('should be false when typeDocument is CE and documentNumber is so short', async () => {
    const schemaMockInvalid = { ...schemaMock, typeDocument: ETypeDocument.CE, documentNumber: '12' }

    const result = await schema.isValid(schemaMockInvalid);
    expect(result).toEqual(false);
  });

});
