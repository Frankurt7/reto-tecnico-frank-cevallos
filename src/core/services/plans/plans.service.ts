import { plansData } from './plans.data';
import { toDisplayPlansList } from './plans.mappers';

export const plansService = {
  getPlansList: async (birthDay: string) => toDisplayPlansList(await plansData.getPlansList(), birthDay),
};

export default plansService;
