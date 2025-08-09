import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchTrendingMovieAndTV = createAsyncThunk(
  "trendingMovieAndTVSlice/fetchTrendingMovieAndTV",
  async (type, thunkAPI) => {
    try {
      const validType = type === "tv" ? "tv" : "movie";

      const trendigData = await tmdbApi.get(`/trending/${validType}/week`);
      const results = trendigData.data.results;      
        console.log(results);
        
      if (!results || results.length === 0) return null;

      return { type, results };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
