import { createSlice } from "@reduxjs/toolkit";
import { sendRequestloginUser } from "../Actions/sendRequestloginUser.action";

const loginRequestSlice = createSlice({
  name: "loginRequestSlice",
  initialState: {
    token: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendRequestloginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendRequestloginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
      })
      .addCase(sendRequestloginUser.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      });
  },
});

export default loginRequestSlice.reducer;
