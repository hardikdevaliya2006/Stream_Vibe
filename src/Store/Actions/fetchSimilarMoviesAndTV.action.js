import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchSimilarMoviesAndTV = createAsyncThunk(
  "similarMoviesAndTVSlice/fetchSimilarMoviesAndTV",
  async ({ type, genreId }, thunkApi) => {
    try {
      const validType = type === "tv" ? "tv" : "movie";
      const genreIds = genreId.map((g) => g.id).join(",");

      const getData = await tmdbApi.get(`/discover/${validType}`, {
        params: {
          with_genres: genreIds,
        },
      });
      const similarData = getData.data.results;
      return { type, similarData };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Fetch error");
    }
  }
);
