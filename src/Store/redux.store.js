import { configureStore } from "@reduxjs/toolkit";
import moviesGenreSlice from "./Reducer/moviesGenre.reducer";
import carousleImgSlice from "./Reducer/carousleImg.reducer";
import moviesAndTVGenreSlice from "./Reducer/moviesAndTVGenre.reducer";
import trendingMovieAndTVSlice from "./Reducer/trendingMovieAndTV.reducer"

export const store = configureStore({
  reducer: {
    tmdbGenreWithMovies: moviesGenreSlice,
    carousleImgData: carousleImgSlice,
    genreByMoviesAndTV: moviesAndTVGenreSlice,
    trendingData: trendingMovieAndTVSlice
  },
});