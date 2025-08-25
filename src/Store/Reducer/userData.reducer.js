import { createSlice } from "@reduxjs/toolkit";
import fetchUserData from "../Actions/fetchUserData.action";
import toast from "react-hot-toast";

const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState: {
    userDataLoading: false,
    userData: {},
    error: null,
  },
  reducers: {
    logout: () => {
      localStorage.removeItem("token");
      toast.success("Logout Successfully.", {
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.userDataLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.userDataLoading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.userDataLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userDataSlice.actions
export default userDataSlice.reducer;