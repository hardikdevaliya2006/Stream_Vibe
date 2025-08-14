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
        const page1 = await tmdbApi.get(`/discover/tv`, {
          params: {
            with_original_language: "hi",
            page: 1,
          },
        });

        const detailedPage1 = await Promise.all(
          page1.data.results.map(async (show) => {
            const detailRes = await tmdbApi.get(`/tv/${show.id}`);
            return detailRes.data;
          })
        );

        const filteredPage1 = detailedPage1.filter((show) => {
          const isFromUllu = show.networks?.some(
            (net) => net.id === 2902 || net.name.toLowerCase() === "ullu"
          );
          const hasPoster = !!show.poster_path;
          return !isFromUllu && hasPoster;
        });

        const skippedCount = detailedPage1.length - filteredPage1.length;
        let finalShows = [...filteredPage1];
        if (skippedCount > 0) {
          const page2 = await tmdbApi.get(`/discover/tv`, {
            params: {
              with_original_language: "hi",
              page: 2,
            },
          });

          const detailedPage2 = await Promise.all(
            page2.data.results.map(async (show) => {
              const detailRes = await tmdbApi.get(`/tv/${show.id}`);
              return detailRes.data;
            })
          );

          const filteredPage2 = detailedPage2.filter((show) => {
            const isFromUllu = show.networks?.some(
              (net) => net.id === 2902 || net.name.toLowerCase() === "ullu"
            );
            const hasPoster = !!show.poster_path;
            return !isFromUllu && hasPoster;
          });

          finalShows = [...finalShows, ...filteredPage2.slice(0, skippedCount)];
        }

        mustWatchData = finalShows;
      }

      return { mustWatchData, type };
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
