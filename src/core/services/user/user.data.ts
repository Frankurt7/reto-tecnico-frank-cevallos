import { https } from 'shared/utils/https';
import type { IGetUserResponse } from './user.dto';

const userBaseURL = '/user.json';

export const userData = {
  getUser: async (): Promise<IGetUserResponse> => {
    const { data } = await https.get<IGetUserResponse>(userBaseURL);

    return data;
  },
};
