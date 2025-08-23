import { createAsyncThunk } from "@reduxjs/toolkit";
import fromApi from "../../Services/fromApi";
import toast from "react-hot-toast";

export const sendContactFrom = createAsyncThunk(
  "contactFrom/sendContactFrom",
  async (formData, thunkAPI) => {
    try {
      const response = await fromApi.post("", formData);
      toast.success("From Submited Successfully.", {
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
      toast.error("From Not Submited.", {
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
