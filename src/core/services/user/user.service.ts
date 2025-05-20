import { userData } from './user.data';

export const userService = {
  getUser: async () => await userData.getUser(),
};

export default userService;
