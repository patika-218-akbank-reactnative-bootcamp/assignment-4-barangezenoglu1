import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/UserSlice/userSlice';
import moviesReducer from '../features/MovieSlice/moviesSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});
