import { createSlice } from "@reduxjs/toolkit";
import { fetchMustWatchMovieAndTV } from "../Actions/fetchMustWatchMovieAndTV.action";

const mustWatchMovieAndTVSlice = createSlice({
  name: "mustWatchMovieAndTVSlice",
  initialState: {
    mustWatchDataLoading: false,
    mustWatchTV: [],
    mustWatchMovies: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {  
    builder
      .addCase(fetchMustWatchMovieAndTV.pending, (state) => {
        state.mustWatchDataLoading = true;
      })
      .addCase(fetchMustWatchMovieAndTV.fulfilled, (state, action) => {
        state.mustWatchDataLoading = false;
        const { mustWatchData, type } = action.payload;
        if (type === "movie") {
          state.mustWatchMovies = mustWatchData;
        } else if (type === "tv") {
          state.mustWatchTV = mustWatchData;
        }
      })
      .addCase(fetchMustWatchMovieAndTV.rejected, (state, action) => {
        state.mustWatchDataLoading = false;
        state.error = action.payload;
      });
  },
});

export default mustWatchMovieAndTVSlice.reducer;
