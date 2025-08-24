import { configureStore } from "@reduxjs/toolkit";
import moviesGenreSlice from "./Reducer/moviesGenre.reducer";
import carousleImgSlice from "./Reducer/carousleImg.reducer";
import moviesAndTVGenreSlice from "./Reducer/moviesAndTVGenre.reducer";
import trendingMovieAndTVSlice from "./Reducer/trendingMovieAndTV.reducer";
import newReleasedMovieAndTVSlice from "./Reducer/newReleasedMovieAndTV.reducer";
import mustWatchMovieAndTVSlice from "./Reducer/mustWatchMovieAndTV.reducer";
import detailMovieAndTVSlice from "./Reducer/detailMovieAndTV.reducer";
import similarMoviesAndTVSlice from "./Reducer/similarMoviesAndTV.reducer";
import seasonsAndEpisodesSlice from "./Reducer/seasonsAndEpisodes.reducer";
import searchResultsSlice from "./Reducer/searchResults.reducer";
import contactSlice from "./Reducer/contactFrom.reducer";
import loginRequestSlice from "./Reducer/loginRequest.reducer";

export const store = configureStore({
  reducer: {
    tmdbGenreWithMovies: moviesGenreSlice,
    carousleImgData: carousleImgSlice,
    genreByMoviesAndTV: moviesAndTVGenreSlice,
    trendingData: trendingMovieAndTVSlice,
    newReleasedData: newReleasedMovieAndTVSlice,
    mustWatchData: mustWatchMovieAndTVSlice,
    detailData: detailMovieAndTVSlice,
    similarData: similarMoviesAndTVSlice,
    episodeData: seasonsAndEpisodesSlice,
    searchData: searchResultsSlice,
    sendFromData: contactSlice,
    loginData: loginRequestSlice,
  },
});