import { createSlice } from '@reduxjs/toolkit';
import { extraReducers } from './async-thunks';
import { initialState, SLICE_NAMESPACE } from './constants';
import { reducers } from './reducers';

const userSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers,
  extraReducers,
});

export const { updateUserFromQuotationForm } = userSlice.actions;

export default userSlice.reducer;
