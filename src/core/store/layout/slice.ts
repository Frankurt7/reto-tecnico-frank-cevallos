import { createSlice } from '@reduxjs/toolkit';
import { initialState, SLICE_NAMESPACE } from './constants';
import { reducers } from './reducers';

export const layoutSlice = createSlice({
  name: SLICE_NAMESPACE,
  initialState,
  reducers,
});

export const { changeToStep } = layoutSlice.actions;

export default layoutSlice.reducer;
