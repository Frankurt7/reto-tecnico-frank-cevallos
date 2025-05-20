import { IPlanState } from './types';

export const SLICE_NAMESPACE = 'plan';

export const initialState: IPlanState = {
  to: null,
  selectedPlan: null,
};
