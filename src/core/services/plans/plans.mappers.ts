import { IPlan } from 'core/model/interfaces/plans';
import { IGetPlansListResponse } from './plans.dto';
import { GetFullYear } from 'shared/utils/format-date.utils';

export const toDisplayPlansList = (plansListResponde: IGetPlansListResponse, birthDay: string): Array<IPlan> => {
  const userYear = GetFullYear(birthDay);
  const userAge = new Date().getFullYear() - userYear;

  return plansListResponde.list
    .filter(plan => plan.age <= userAge)
    .map(plan => ({
      name: plan.name,
      price: plan.price,
      description: plan.description,
    }));
};
