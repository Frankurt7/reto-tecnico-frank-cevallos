import type { IUserState } from './types';

export const SLICE_NAMESPACE = 'user';

export const initialState: IUserState = {
  user: null,
  loading: false,
};
