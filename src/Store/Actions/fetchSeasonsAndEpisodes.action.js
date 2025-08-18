import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchSeasonsAndEpisodes = createAsyncThunk(
  "seasonsAndEpisodes/fetchAll",
  async ({ tvId, seasons }, thunkApi) => {
    try {
      const requests = seasons.map((season) =>
        tmdbApi.get(`/tv/${tvId}/season/${season.season_number}`)
      );

      const responses = await Promise.all(requests);

      const allSeasons = responses.map((res, idx) => ({
        ...seasons[idx], 
        episodes: res.data.episodes, 
      }));

      return allSeasons;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
