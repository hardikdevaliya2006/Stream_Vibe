import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import toast from "react-hot-toast";

export const sendRequestloginUser = createAsyncThunk(
  "loginRequest/sendRequestloginUser",
  async (credentials, thunkApi) => {
    try {
      const { newUser, ...loginData } = credentials;
      const response = await authApi.post("/login", loginData);
      const token = response?.data?.token;
      if (!newUser) {
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
      }
      return response.data;
    } catch (error) {
      const apiErrorMsg =
        error?.response?.data?.error || "Something went wrong";
      toast.error(apiErrorMsg, {
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
      return thunkApi.rejectWithValue(apiErrorMsg);
    }
  }
);
