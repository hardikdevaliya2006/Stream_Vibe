import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import { toast } from "react-hot-toast";

const requestOTP = createAsyncThunk(
  "forgotPasswordSlice/sendRequestToGetOTP",
  async (email, { rejectWithValue }) => {
    try {
      const response = await authApi.post("/forgot-password", { email });

      toast.success("OTP Sent Successfully!", {
        style: {
          border: "1px solid #262626",
          padding: "12px",
          color: "#A6A6A6",
          background: "#141414",
        },
        iconTheme: { primary: "#00C851", secondary: "#FFFAEE" },
      });
      return response.data;
    } catch (error) {
      // ✅ Axios jumps here for 404, 400, 500, etc.
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "User not found";

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

export default requestOTP;
