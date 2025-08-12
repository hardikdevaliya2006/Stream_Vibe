import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchNewReleasedMovieAndTV = createAsyncThunk(
  "newReleasedMovieAndTVSlice/fetchNewReleasedMovieAndTV",
  async (type, thunkApi) => {
    try {
      let newReleasedData;
      const validType = type === "tv" ? "tv" : "movie";

      if (validType === "movie") {
        const get = await tmdbApi.get(`movie/now_playing`);
        newReleasedData = get.data.results;
      } else {
        const get = await tmdbApi.get(`/tv/airing_today`);
        const arringToday = get.data.results;

        const detailedShows = await Promise.all(
          arringToday.map(async (show) => {
            const detailRes = await tmdbApi.get(`/tv/${show.id}`);
            return detailRes.data;
          })
        );
        newReleasedData = detailedShows;
      }
      return { newReleasedData, type };
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
