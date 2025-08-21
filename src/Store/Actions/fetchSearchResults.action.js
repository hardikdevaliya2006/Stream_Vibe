import { createAsyncThunk } from "@reduxjs/toolkit";
import tmdbApi from "../../Services/tmdbApi";

export const fetchSearchResults = createAsyncThunk(
  "searchResults/fetchSearchResults",
  async (query, thunkApi) => {
    try {
      if (!query) return [];
      const res = await tmdbApi.get("/search/multi", {
        params: {
          query: query,
        },
      });
      const result = res.data.results;
      return result || [];
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
