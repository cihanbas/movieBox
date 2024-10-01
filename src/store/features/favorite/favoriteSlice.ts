import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieDetail } from 'src/services/types/MovieDetail';

export interface FavSlice {
  movies: MovieDetail[];
}

const initialState: FavSlice = {
  movies: [],
};

const favSlices = createSlice({
  name: 'favSlices',
  initialState,
  reducers: {
    addOrRemove: (state, action: PayloadAction<MovieDetail>) => {
      const movie = action.payload;
      const isExist = state.movies.find((item) => item.id == movie.id);
      if (isExist) {
        state.movies = state.movies.filter((item) => item.id !== movie.id);
      } else {
        state.movies.push(movie);
      }
    },
  },
});

export const { addOrRemove } = favSlices.actions;
export default favSlices.reducer;
