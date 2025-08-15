import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchDetailMovieAndTV = createAsyncThunk(
  "detailMovieAndTV/fetchDetailMovieAndTV",
  async ({type, id}, thunkAPI) => {
    try {
      const validType = type === "tv" ? "tv" : "movie";

      const getData = await tmdbApi.get(`/${validType}/${id}`, {
        params: {
          append_to_response: "videos,images,credits",
        },
      });
      const fullDetails = getData.data;
      return { fullDetails, type };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
