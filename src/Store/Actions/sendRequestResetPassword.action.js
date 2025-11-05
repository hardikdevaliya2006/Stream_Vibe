import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import toast from "react-hot-toast";

export const requestResetPassword = createAsyncThunk(
  "forgotPasswordSlice/requestResetPassword",
  async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
      const { data } = await authApi.post("/reset-password", {
        email,
        otp,
        newPassword,
      });
      toast.success("Password Reset Successfully!", {
        style: {
          border: "1px solid #262626",
          padding: "12px",
          color: "#A6A6A6",
          background: "#141414",
        },
        iconTheme: { primary: "#00C851", secondary: "#FFFAEE" },
      });
      return data;
    } catch (error) {
      const status = error.response?.status;
      let message = "Something went wrong. Please try again.";

      if (status === 400) {
        message = "Invalid or expired OTP. Please check and try again.";
      } else if (status === 401) {
        message = "Unauthorized request. Please log in again.";
      } else if (status === 404) {
        message = "Email not found. Please verify your address.";
      } else if (status === 500) {
        message = "Server error. Please try again later.";
      }

      toast.error(message, {
        style: {
          border: "1px solid #262626",
          padding: "12px",
          color: "#A6A6A6",
          background: "#141414",
        },
        iconTheme: { primary: "#E50000", secondary: "#FFFAEE" },
      });

      return rejectWithValue(message);
    }
  }
);
