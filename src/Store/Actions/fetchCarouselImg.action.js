import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchCarouselImg = createAsyncThunk(
  "CarouselImg/fetchCarouselImg",
  async (_, thunkApi) => {
    try {
      const clean = (data) =>
        data.results.map((item) => ({
          id: item.id,
          backdrop_path: item.backdrop_path,
          overview: item.overview,
          media_type: item.media_type, 
          title: item.title || item.name,
          original_language: item.original_language,
        }));

      const res = await tmdbApi.get("/trending/all/week", {
        params: { page: 1 },
      });

      return clean(res.data).slice(0, 12);
    } catch (error) {
      return thunkApi.rejectWithValue(error.message || "Fetch error");
    }
  }
);