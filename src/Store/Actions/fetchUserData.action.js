import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";

const fetchUserData = createAsyncThunk("userData/fetchUserData", async (_, thunkApi) => {
  try {
    const response = await authApi.get("/me");
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error || "Something Went Wrong In fetchUser Data"
    );
  }
});

export default fetchUserData;