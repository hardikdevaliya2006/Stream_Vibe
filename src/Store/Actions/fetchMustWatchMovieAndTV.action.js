import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchMustWatchMovieAndTV = createAsyncThunk(
  "mustWatchMovieAndTVSlice/fetchMustWatchMovieAndTV",
  async (type, thunkApi) => {
    try {
      let mustWatchData = [];
      const validType = type === "tv" ? "tv" : "movie";
      if (validType === "movie") {
        const langConfig = [
          { code: "hi", count: 7 }, 
          { code: "te", count: 7 },
          { code: "ta", count: 6 }, 
        ];

        for (const { code, count } of langConfig) {
          const request = await tmdbApi.get("/discover/movie", {
            params: {
              with_original_language: code,
              region: "IN",
              sort_by: "popularity.desc",
              page: 1,
            },
          });

          mustWatchData.push(...request.data.results.slice(0, count));
        }
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
