import {createSlice} from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
  },
  reducers: {
    setCurrentMovies: (state, action) => {
      return {
        movies: action.payload,
      };
    },
  },
});
export const {setCurrentMovies} = movieSlice.actions;
export default movieSlice.reducer;
