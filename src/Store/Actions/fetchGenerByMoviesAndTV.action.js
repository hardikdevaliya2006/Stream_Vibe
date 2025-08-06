import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchGenerByMoviesAndTV = createAsyncThunk(
  "moviesAndTVGenreSlice/fetchGenerByMoviesAndTV",
  async (type = "movie", thunkAPI) => {
    try {
      const validType = type === "tv" ? "tv" : "movie";

      const genre = await tmdbApi.get(`/genre/${validType}/list`);
      const genres = genre.data.genres;

      const genresWithContent = await Promise.all(
        genres.map(async (genre) => {
          const res = tmdbApi.get(`/discover/${validType}`, {
            params: {
              with_genres: genre.id,
              sort_by: "popularity.desc",
            },
          });
          return {
            ...genre,
            type: validType,
            items: (await res).data.results,
          };
        })
      );
      return genresWithContent;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
