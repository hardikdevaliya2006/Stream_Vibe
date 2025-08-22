import { createSlice } from "@reduxjs/toolkit";
import { fetchSeasonsAndEpisodes } from "../Actions/fetchSeasonsAndEpisodes.action";

const seasonsAndEpisodesSlice = createSlice({
  name: "seasonsAndEpisodesSlice",
  initialState: {
    episodeData: [],
    episodeDataLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeasonsAndEpisodes.pending, (state) => {
        state.episodeDataLoading = true;
      })
      .addCase(fetchSeasonsAndEpisodes.fulfilled, (state, action) => {
        state.episodeDataLoading = true;
        state.episodeData = action.payload;
      })
      .addCase(fetchSeasonsAndEpisodes.rejected, (state, action) => {
        state.episodeDataLoading = false;
        state.error =
          action.payload || "Something went wrong in seasonsAndEpisodesSlice";
      });
  },
});

export default seasonsAndEpisodesSlice.reducer