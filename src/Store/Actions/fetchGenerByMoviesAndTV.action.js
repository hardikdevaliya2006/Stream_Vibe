import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchGenerByMoviesAndTV = createAsyncThunk(
  "moviesAndTVGenreSlice/fetchGenerByMoviesAndTV",
  async (type , thunkAPI) => {
    try {
      const validType = type === "tv" ? "tv" : "movie";
      const genreRes = await tmdbApi.get(`/genre/${validType}/list`);
      const genres = genreRes.data.genres;

      const genresWithContent = await Promise.all(
        genres.map(async (genre) => {
          const res = await tmdbApi.get(`/discover/${validType}`, {
            params: {
              with_genres: genre.id,
              sort_by: "popularity.desc",
            },
          });

          const results = res.data.results;
          if (!results || results.length === 0) return null;

          return { 
            ...genre,
            type: validType,
            items: results.slice(0, 10),
          };
        })
      );

      return genresWithContent.filter(Boolean);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
