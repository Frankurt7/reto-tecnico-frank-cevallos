import { useAppDispatch, useAppSelector } from 'core/store';
import { fetchUser } from 'core/store/user';
import { useEffect } from 'react';

export const useUser = () => {
  const dispatch = useAppDispatch();
  const { user, loading } = useAppSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return { user, userLoading: loading };
};
