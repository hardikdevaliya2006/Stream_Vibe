import { createSlice } from "@reduxjs/toolkit";
import { sendContactFrom } from "../Actions/sendContactFrom.action";

const contactSlice = createSlice({
  name: "contactFromSlice",
  initialState: {
    success: false,
    fromLoading: false,
    error: null,
  },
  reducers: {
    resetStatus: (state) => {
      state.fromLoading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendContactFrom.pending, (state) => {
        state.fromLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendContactFrom.fulfilled, (state) => {
        state.fromLoading = false;
        state.success = true;
      })
      .addCase(sendContactFrom.rejected, (state, action) => {
        state.fromLoading = false;
        state.error = action.payload || "Submission failed";
      });
  },
});

export const { resetStatus } = contactSlice.actions;
export default contactSlice.reducer;
