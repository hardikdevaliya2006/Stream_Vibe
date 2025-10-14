import { createSlice } from "@reduxjs/toolkit";
import { sendRequestDeleteUser } from "../Actions/sendRequestDeleteUser.action";

const deleteUserSlice = createSlice({
  name: "deleteUserSlice",
  initialState: {
    actionLoading: false,
    isDelete: false,
    error: null,
  },
  reducers: {
    resetDeleteState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
      localStorage.removeItem("token")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendRequestDeleteUser.pending, (state) => {
        state.actionLoading = true;
        state.isDelete = false;
        state.error = null;
      })
      .addCase(sendRequestDeleteUser.fulfilled, (state) => {
        state.actionLoading = false;
        state.isDelete = true;
      })
      .addCase(sendRequestDeleteUser.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetDeleteState } = deleteUserSlice.actions;
export default deleteUserSlice.reducer;