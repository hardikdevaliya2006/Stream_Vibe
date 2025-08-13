import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchMustWatchMovieAndTV = createAsyncThunk(
  "mustWatchMovieAndTVSlice/fetchMustWatchMovieAndTV",
  async (type, thunkApi) => { 
    try {
      let mustWatchData;
      const validType = type === "tv" ? "tv" : "movie";
      if (validType === "movie") {
        const requst = await tmdbApi.get("/discover/movie", {
          params: {
            with_original_language: "hi",
            region: "IN",
          },
        });
        mustWatchData = requst.data.results;
      } else {
        const get = await tmdbApi.get(`/discover/tv`, {
          params: {
            with_original_language: "hi",
            region: "IN",
          },
        });
        const mustWatchTV = get.data.results;

        const detailedShows = await Promise.all(
          mustWatchTV.map(async (show) => {
            const detailRes = await tmdbApi.get(`/tv/${show.id}`);
            return detailRes.data;
          })
        );
        mustWatchData = detailedShows;
      }
      return { mustWatchData, type };
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
