import { createSlice } from "@reduxjs/toolkit";
import fetchUserData from "../Actions/fetchUserData.action";
import toast from "react-hot-toast";

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState: {
    userDataLoading: false,
    userData: {},
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.userDataLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userDataLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.userDataLoading = false;
        state.error = action.payload;
        state.userData = null;
      });
  },
});

export default userDataSlice.reducer;
