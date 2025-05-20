import { https } from 'shared/utils/https';
import { IGetPlansListResponse } from './plans.dto';

const plansListBaseURL = '/plans.json';

export const plansData = {
  getPlansList: async (): Promise<IGetPlansListResponse> => {
    const { data } = await https.get<IGetPlansListResponse>(plansListBaseURL);

    return data;
  },
};
