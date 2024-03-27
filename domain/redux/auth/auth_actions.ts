import {User} from '../..';

export const setUser = (user: User | null) => ({
  type: 'SET_USER',
  payload: user,
});
