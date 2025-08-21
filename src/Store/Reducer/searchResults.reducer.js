import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchResults } from "../Actions/fetchSearchResults.action";

const searchResultsSlice = createSlice({
  name: "searchResultsSlice",
  initialState: {
    qurey: "",
    searchResult: [],
    loadingSearchData: false,
    error: null,
  },
  reducers: {
    setQuery: (state, action) => {
      state.qurey = action.payload;
    },
    clearResults: (state) => {
      state.qurey = "";
      state.searchResult = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loadingSearchData = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loadingSearchData = false;
        state.searchResult = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loadingSearchData = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuery, clearResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
