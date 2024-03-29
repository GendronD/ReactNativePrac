import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth';

const reducer = {
  // Auth
  authReducer,
};

export const store = configureStore({reducer});

export default store;
