import { createSlice } from "@reduxjs/toolkit";
import { fetchSimilarMoviesAndTV } from "../Actions/fetchSimilarMoviesAndTV.action";

const similarMoviesAndTVSlice = createSlice({
  name: "similarMoviesAndTVSlice",
  initialState: {
    movieSimilar: [],
    tvSimilar: [],
    similarDataLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSimilarMoviesAndTV.pending, (state) => {
        state.similarDataLoading = true;
      })
      .addCase(fetchSimilarMoviesAndTV.fulfilled, (state, action) => {
        state.similarDataLoading = false;
        const { type, similarData } = action.payload;
        if (type === "movie") {
          state.movieSimilar = similarData;
        } else {
          state.tvSimilar = similarData;
        }
      })
      .addCase(fetchSimilarMoviesAndTV.rejected, (state, action) => {
        state.similarDataLoading = false;
        state.error = action.payload;
      });
  },
});

export default similarMoviesAndTVSlice.reducer;