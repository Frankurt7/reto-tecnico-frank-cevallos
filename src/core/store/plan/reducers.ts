import type { TSliceReducer } from 'core/store';
import { IPlanState } from './types';
import { EPlanToList } from 'core/model/enums/plans.enum';
import { IPlan } from 'core/model/interfaces/plans';

export const setTo: TSliceReducer<IPlanState, EPlanToList> = (state, action) => {
  state.to = action.payload;
};

export const setPlan: TSliceReducer<IPlanState, IPlan> = (state, action) => {
  state.selectedPlan = action.payload;
};

export const reducers = { setTo, setPlan };
