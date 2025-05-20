import type { TSliceReducer } from 'core/store';
import { IUserState } from './types';
import { IQuotationForm } from 'core/model/interfaces/quotation';

const updateUserFromQuotationForm: TSliceReducer<IUserState, Omit<IQuotationForm, 'privacyPolicy' | 'tradePolicy'>> = (
  state,
  action,
) => {
  state.user = {
    ...state.user,
    typeDocument: action.payload.typeDocument,
    documentNumber: action.payload.documentNumber,
    phone: action.payload.phone,
  };
};

export const reducers = { updateUserFromQuotationForm };
