import { createSlice } from "@reduxjs/toolkit";
import requestOTP from "../Actions/sendRequestToGetOTP.action";
import { requestResetPassword } from "../Actions/sendRequestResetPassword.action";
import toast from "react-hot-toast";

const forgotPasswordSlice = createSlice({
  name: "forgotPasswordSlice",
  initialState: {
    email: "",
    otpSent: false,
    loading: false,
    success: false,
    message: "",
    error: null,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetState: (state) => {
      state.otpSent = false;
      state.success = false;
      state.message = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.otpSent = true;
        state.message = action.payload.message;
      })
      .addCase(requestOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(requestResetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestResetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.message = action.payload.message; 
      })
      .addCase(requestResetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setEmail, resetState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
