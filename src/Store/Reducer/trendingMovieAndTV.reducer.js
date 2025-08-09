import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovieAndTV } from "../Actions/fetchTrendingMovieAndTV.action";

const trendingMovieAndTV = createSlice({
  name: "trendingMovieAndTVSlice",
  initialState: {
    tvTrending: [],
    movieTrending: [],
    trendigDataLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovieAndTV.pending, (state) => {
        state.trendigDataLoading = true;
      })
      .addCase(fetchTrendingMovieAndTV.fulfilled, (state, action) => {
        state.trendigDataLoading = false;
        const {results ,type} = action.payload;
        if (type === "movie") {
          state.movieTrending = results;
        } else if (type === "tv") {
          state.tvTrending = results;
        }
      })
      .addCase(fetchTrendingMovieAndTV.rejected, (state, action) => {
        state.trendigDataLoading = false;
        state.error =
          action.payload || "Something went wrong in trendingMovieAndTVSlice";
      });
  },
});

export default trendingMovieAndTV.reducer;
