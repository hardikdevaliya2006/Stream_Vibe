import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchCarouselImg = createAsyncThunk(
  "CarouselImg/fetchCarouselImg",
  async (_, thunkApi) => {
    try {
      const clean = (data) =>
        data.results.map((item) => ({
          backdrop_path: item.backdrop_path,
          overview: item.overview,
          media_type: "movie",
          title: item.title || item.name,
          original_language: item.original_language,
        }));

      const hindiRes = await tmdbApi.get("/discover/movie", {
        params: {
          with_original_language: "hi",
          sort_by: "popularity.desc", 
          page: 1,
        },
      });
      const hindiMovies = clean(hindiRes.data).slice(0, 6);

      const englishRes = await tmdbApi.get("/discover/tv", {
        params: {
          with_original_language: "en",
          sort_by: "popularity.desc",
          page: 1,
        },
      });
      const englishMovies = clean(englishRes.data).slice(0, 6);

      // Hindi first, then English
      return [...hindiMovies, ...englishMovies];
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Fetch error");
    }
  }
);
