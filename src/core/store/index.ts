import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ActionReducerMapBuilder, configureStore, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const store = configureStore({
  reducer: rootReducer,
});

export type TAppDispatch = typeof store.dispatch;
export type TRootState = ReturnType<typeof store.getState>;
export type TSliceReducer<T, S = void> = (state: T, action: PayloadAction<S>) => T | void;
export type TSliceExtraReducer<T> = (builder: ActionReducerMapBuilder<T>) => ActionReducerMapBuilder<T>;

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export default store;
