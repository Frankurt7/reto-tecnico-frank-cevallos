import { EPlanToList } from 'core/model/enums/plans.enum';
import { TRootState } from '../reducers';
import { IPlan } from 'core/model/interfaces/plans';

export const toSelector = (state: TRootState): EPlanToList => state.plan.to;
export const selectedPlanSelector = (state: TRootState): IPlan => state.plan.selectedPlan;
