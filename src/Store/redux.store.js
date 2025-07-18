import { configureStore } from "@reduxjs/toolkit";
import moviesGenreSlice from "./Reducer/moviesGenre.reducer";

export const store = configureStore({
  reducer: {
    tmdbGenreWithMovies: moviesGenreSlice,
  },
});