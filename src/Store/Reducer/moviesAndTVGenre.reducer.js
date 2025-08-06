import { createSlice } from "@reduxjs/toolkit";
import { fetchGenerByMoviesAndTV } from "../Actions/fetchGenerByMoviesAndTV.action";

const typeByMoviesAndTV = createSlice({
  name: "moviesAndTVGenreSlice",
  initialState: {
    genreWithContent: [],
    genreWithContentLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenerByMoviesAndTV.pending, (state) => {
        state.genreWithContentLoading = true;
        state.error = null;
      })
      .addCase(fetchGenerByMoviesAndTV.fulfilled, (state, action) => {
        state.genreWithContentLoading = false;
        state.genreWithContent = action.payload;
      })
      .addCase(fetchGenerByMoviesAndTV.rejected, (state, action) => {
        state.genreWithContentLoading = false;
        state.error =
          action.payload || "Something went wrong in moviesAndTVGenreSlice";
      });
  },
});

export default typeByMoviesAndTV.reducer;