import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchGenresWithMovies = createAsyncThunk( 
  "moviesGenre/fetchGenresWithMovies",
  async (__dirname, thunkApi) => {
    try {
      const genresId = await tmdbApi.get("/genre/movie/list");
      const genres = genresId.data.genres;

      const genresWithMovies = await Promise.all(
        genres.map(async (genre) => {
          const movieListRes = await tmdbApi.get("/discover/movie", {
            params: {
              with_genres: genre.id,
              page: 1,
            },
          });
          const moviesData = movieListRes.data.results;
          return {
            ...genre,
            moviesData,
          };
        })
      );

      return genresWithMovies;
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
