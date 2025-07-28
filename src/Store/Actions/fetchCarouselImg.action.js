import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchCarouselImg = createAsyncThunk(
  "CarouselImg/fetchCarouselImg",
  async (__dirname, thunkApi) => {
    try {
      const rawData = await tmdbApi.get("/trending/all/day");
      const cleanData = rawData.data.results.map((item) => ({
        backdrop_path: item.backdrop_path,
        overview: item.overview,
        media_type: item.media_type,
        title: item.title || item.name,
      }));

      return cleanData;
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
