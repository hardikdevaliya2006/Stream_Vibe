import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import toast from "react-hot-toast";

export const sendRequestToChangeUserName = createAsyncThunk(
  "updateUserName/sendRequestToChangeUserName",
  async (newName, thunkApi) => {
    try {
      const response = await authApi.put("/update", newName);
      return response.data;
    } catch (error) {
      toast.error("Something Went Wrong", {
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
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);
