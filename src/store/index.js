import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
