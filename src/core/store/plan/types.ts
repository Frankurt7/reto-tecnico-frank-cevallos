import { EPlanToList } from 'core/model/enums/plans.enum';
import { IPlan } from 'core/model/interfaces/plans';

export interface IPlanState {
  to: EPlanToList;
  selectedPlan: IPlan;
}
