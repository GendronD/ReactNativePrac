import {User} from '../..';
import {combineReducers} from 'redux';

export const authReducer = (state: User | null = null, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  user: authReducer,
});
