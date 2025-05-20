import { IUser } from 'core/model/interfaces/user';

export interface IUserState {
  user: IUser;
  loading: boolean;
}
