import { EStepperList } from 'core/model/enums/stepper.enum';
import { ILayoutState } from './types';

export const SLICE_NAMESPACE = 'layout';

export const initialState: ILayoutState = {
  step: EStepperList.PLAN_LIST,
};
