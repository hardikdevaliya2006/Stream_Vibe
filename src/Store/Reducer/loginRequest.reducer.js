import { createSlice } from "@reduxjs/toolkit";
import { sendRequestloginUser } from "../Actions/sendRequestloginUser.action";
import { sendRequestCreateUser } from "../Actions/sendRequestCreateUser.action";
import toast from "react-hot-toast";

const loginRequestSlice = createSlice({
  name: "loginRequestSlice",
  initialState: {
    token: localStorage.getItem("token") || null,
    user: null,
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.user = null;
      state.token = null;
      state.status = "idle";
      state.error = null;
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
      .addCase(sendRequestloginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendRequestloginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
      })
      .addCase(sendRequestloginUser.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      });

    builder
      .addCase(sendRequestCreateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(sendRequestCreateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.user = action.payload.user || null;
        state.error = null;
      })
      .addCase(sendRequestCreateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout } = loginRequestSlice.actions;
export default loginRequestSlice.reducer;