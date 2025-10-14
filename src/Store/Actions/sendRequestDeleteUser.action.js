import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import toast from "react-hot-toast";

export const sendRequestDeleteUser = createAsyncThunk(
  "deleteUser/sendRequestDeleteUser",
  async (_, thunkAPI) => {
    try {
      const response = await authApi.delete("/delete");
      toast.success("Account Deleted Successfully", {
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
      return response.data;
    } catch (error) {
      toast.error("User Account Not Deleted", {
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
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
