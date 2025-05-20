import { createSlice } from '@reduxjs/toolkit';
import { initialState, SLICE_NAMESPACE } from './constants';
import { reducers } from './reducers';

export const planSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers,
});

export const { setTo, setPlan } = planSlice.actions;

export default planSlice.reducer;
