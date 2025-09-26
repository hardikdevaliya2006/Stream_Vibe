import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";

const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async (_, thunkApi) => {
    try {
      const response = await authApi.get("/me");

      if (response.data === null) {
        return thunkApi.rejectWithValue("User not found");
      }

      return response.data; 
    } catch (error) {
      return thunkApi.rejectWithValue("Something went wrong");
    }
  }
);

export default fetchUserData;
