import { createAsyncThunk } from '@reduxjs/toolkit';
import type { TAppDispatch, TRootState } from '.';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: TRootState;
  dispatch: TAppDispatch;
}>();
