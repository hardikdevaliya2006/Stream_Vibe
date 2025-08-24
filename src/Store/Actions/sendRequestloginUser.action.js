import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import toast from "react-hot-toast";

export const sendRequestloginUser = createAsyncThunk(
  "loginRequest/sendRequestloginUser",
  async (credentials, thunkApi) => {
    try {
      const response = await authApi.post("/login", credentials);
      const token = response?.data?.token;
      toast.success("Login Successfully.", {
        style: {
          border: "1px solid #262626",
          padding: "12px",
          color: "#A6A6A6",
          background: "#141414",
        },
        iconTheme: {
          primary: "#E50000",
          secondary: "#FFFAEE",
        },
      });
      sessionStorage.setItem("token", token);
      return response.data;
    } catch (error) {
      toast.error("Login Error.", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return thunkApi.rejectWithValue(error || "Error in Login");
    }
  }
);
