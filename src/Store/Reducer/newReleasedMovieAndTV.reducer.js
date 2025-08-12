import { createSlice } from "@reduxjs/toolkit";
import { fetchNewReleasedMovieAndTV } from "../Actions/fetchNewReleasedMovieAndTV.action";

const newReleasedMovieAndTVSlice = createSlice({
  name: "newReleasedMovieAndTVSlice",
  initialState: {
    newReleasedDataLoading: false,
    newReleasedTV: [],
    newReleasedMovies: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewReleasedMovieAndTV.pending, (state) => {
        state.newReleasedDataLoading = true;
      })
      .addCase(fetchNewReleasedMovieAndTV.fulfilled, (state, action) => {
        state.newReleasedDataLoading = false;
        const { newReleasedData, type } = action.payload;
        if (type === "movie") {
          state.newReleasedMovies = newReleasedData;
        } else if (type === "tv") {
          state.newReleasedTV = newReleasedData;
        }
      })
      .addCase(fetchNewReleasedMovieAndTV.rejected, (state, action) => {
        state.newReleasedDataLoading = false;
        state.error = action.payload;
      });
  },
});

export default newReleasedMovieAndTVSlice.reducer;
