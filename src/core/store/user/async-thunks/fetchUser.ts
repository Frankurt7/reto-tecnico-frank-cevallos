import { apiService } from 'core/services';
import type { TSliceExtraReducer } from 'core/store';
import { createAppAsyncThunk } from 'core/store/store.helpers';
import { SLICE_NAMESPACE } from '../constants';
import type { IUserState } from '../types';
import { IGetUserResponse } from 'core/services/user/user.dto';

export const fetchUser = createAppAsyncThunk<IGetUserResponse>(`${SLICE_NAMESPACE}/fetchUser`, async () =>
  apiService.user.getUser(),
);

export const fetchUserReducer: TSliceExtraReducer<IUserState> = builder =>
  builder
    .addCase(fetchUser.pending, state => {
      state.loading = true;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.user = {
        ...state.user,
        name: action.payload.name,
        lastName: action.payload.lastName,
        birthDay: action.payload.birthDay,
      };
      state.loading = false;
    })
    .addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;
    });
