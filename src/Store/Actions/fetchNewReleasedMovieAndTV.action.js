import tmdbApi from "../../Services/tmdbApi";

const { createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchNewReleasedMovieAndTV = createAsyncThunk(
  "newReleasedMovieAndTVSlice/fetchNewReleasedMovieAndTV",
  async (type, thunkApi) => {
    try {
      let newReleasedData;
      const validType = type === "tv" ? "tv" : "movie";

      if (validType === "movie") {
        const get = tmdbApi.get(`/trending/${movie}/day`);
        newReleasedData = get.data.results;
      } else {
      }
      return {newReleasedData, type};
    } catch (error) {
      return thunkApi.rejectWithValue(err.message || "Fetch error");
    }
  }
);
