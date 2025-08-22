import { createSlice } from "@reduxjs/toolkit";
import { fetchDetailMovieAndTV } from "../Actions/fetchDetailMovieAndTV.action";

const detailMovieAndTVSlice = createSlice({
  name: "detailMovieAndTVSlice",
  initialState: {
    tvDetail: [],
    movieDetail: [],
    detailsDataLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailMovieAndTV.pending, (state) => {
        state.detailsDataLoading = true;
      })
      .addCase(fetchDetailMovieAndTV.fulfilled, (state, action) => {
        state.detailsDataLoading = true;
        const { fullDetails, type } = action.payload;
        if (type === "movie") {
          state.movieDetail = fullDetails;
        } else if (type === "tv") {
          state.tvDetail = fullDetails;
        }
      })
      .addCase(fetchDetailMovieAndTV.rejected, (state, action) => {
        state.detailsDataLoading = false;
        state.error = action.payload;
      });
  },
});

export default detailMovieAndTVSlice.reducer;
