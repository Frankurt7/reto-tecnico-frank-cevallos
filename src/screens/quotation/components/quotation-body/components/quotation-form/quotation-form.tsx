import { FormProvider } from 'react-hook-form';
import { Link } from 'react-router';
import { Button } from 'shared/components/button';
import { Checkbox } from 'shared/components/check-box';
import { InputValue } from 'shared/components/input-value';
import { Select } from 'shared/components/select';
import { DOCUMENT_TYPE_LIST } from 'core/constants/document-type.constants';
import { useQuotationForm } from './hooks/use-quotation-form.hooks';

import './quotation-form.scss';

export const QuotationForm = () => {
  const { formMethods, handleSubmit, handleQuote, } = useQuotationForm();

  return (
    <FormProvider {...formMethods}>
      <form className={'quotation-form'} onSubmit={handleSubmit(handleQuote)} >
        <div className={"quotation-form__document-container"}>
          <Select name={'typeDocument'} optionList={DOCUMENT_TYPE_LIST} />
          <InputValue className={"quotation-form__document-input"} name={'documentNumber'} type='number' label='Nro. de documento' onChange={() => null} />
        </div>
        <InputValue className={"quotation-form__phone-input"} name={'phone'} type='number' label='Celular' onChange={() => null} />

        <div className='quotation-form__policies'>
          <Checkbox label={'Acepto lo Política de Privacidad'} name={'privacyPolicy'} />
          <Checkbox label={'Acepto la Política Comunicaciones Comerciales'} name={'tradePolicy'} />
        </div>

        <Link className='quotation-form__terms-conditions' children={'Aplican Términos y Condiciones.'} to={'/'} />

        <Button className={"quotation-form__submit-button"} type='submit'>
          Cotiza aquí
        </Button>
      </form>
    </FormProvider>
  )
}