import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movies } from '../../models/Movies';

interface MoviesState {
  movies: Movies | undefined;
}

const initialState = { movies: undefined } as MoviesState

const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchMovies(state, {payload}: PayloadAction<Movies>) {
      state.movies = payload;
    },
  },
})

export const { fetchMovies } = movies.actions
export default movies.reducer;

