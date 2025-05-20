import { compose } from '@reduxjs/toolkit';
import { fetchUserReducer } from './fetchUser';

export const extraReducers = compose(fetchUserReducer);
export { fetchUser } from './fetchUser';
