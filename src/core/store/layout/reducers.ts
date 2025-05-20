import type { TSliceReducer } from 'core/store';
import { EStepperList } from 'core/model/enums/stepper.enum';
import { ILayoutState } from './types';

export const changeToStep: TSliceReducer<ILayoutState, EStepperList> = (state, action) => {
  state.step = action.payload;
};

export const reducers = { changeToStep };
