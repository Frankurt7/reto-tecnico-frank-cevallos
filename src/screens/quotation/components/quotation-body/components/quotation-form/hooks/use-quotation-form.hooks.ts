import { yupResolver } from '@hookform/resolvers/yup';
import { IQuotationForm } from 'core/model/interfaces/quotation';
import { IUser } from 'core/model/interfaces/user';
import { useAppDispatch } from 'core/store';
import { updateUserFromQuotationForm } from 'core/store/user';
import { useForm } from 'react-hook-form';
import { defaultValues } from '../quotation-form.constants';
import { schema } from '../quotation-form.schema';
import { useNavigate } from 'react-router';
import { plansRoutePath } from 'core/constants/routes.constants';

export const useQuotationForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formMethods = useForm<IQuotationForm>({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = formMethods;

  const handleQuote = (formData: IQuotationForm) => {
    const formUser: IUser = {
      typeDocument: formData.typeDocument,
      documentNumber: formData.documentNumber,
      phone: formData.phone,
      name: null,
      lastName: null,
      birthDay: null,
    };

    dispatch(updateUserFromQuotationForm(formUser));
    navigate(plansRoutePath);
  };

  return {
    formMethods,
    handleSubmit,
    handleQuote,
  };
};
