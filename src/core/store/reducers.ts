import { Action, combineReducers } from 'redux';
import userReducer, { IUserState, initialState as userInitialState } from './user';
import planReducer, { IPlanState, initialState as planInitialState } from './plan';
import layoutReducer, { ILayoutState, initialState as layoutInitialState } from './layout';

export interface IState {
  user: IUserState;
  plan: IPlanState;
  layout: ILayoutState;
}

export const initialState: IState = {
  user: userInitialState,
  plan: planInitialState,
  layout: layoutInitialState,
};

export const appReducer = combineReducers({
  user: userReducer,
  plan: planReducer,
  layout: layoutReducer,
});

export const rootReducer = (state: IState, action: Action) => {
  if (action.type === 'reset') {
    return appReducer(initialState, action);
  }
  return appReducer(state, action);
};

export type TRootState = ReturnType<typeof rootReducer>;
