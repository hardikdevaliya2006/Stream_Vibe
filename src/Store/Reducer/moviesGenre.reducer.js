import { createSlice } from "@reduxjs/toolkit";
import { fetchGenresWithMovies } from "../Actions/fetchGenresWithMovies.action";

const moviesGenreSlice = createSlice({
  name: "moviesGenreSlice",
  initialState: {
    genresWithMovies: [],
    genresLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenresWithMovies.pending, (state) => {
        state.genresLoading = true;
      })
      .addCase(fetchGenresWithMovies.fulfilled, (state, action) => {
        state.genresLoading = false;
        state.genresWithMovies = action.payload;
      })
      .addCase(fetchGenresWithMovies.rejected, (state, action) => {
        state.genresLoading = false;
        state.error = action.payload;
      });
  },
});

export default moviesGenreSlice.reducer;
