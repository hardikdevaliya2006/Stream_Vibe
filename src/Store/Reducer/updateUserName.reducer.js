import { createSlice } from "@reduxjs/toolkit";
import { sendRequestToChangeUserName } from "../Actions/sendRequestToChangeUserName.action";
import toast from "react-hot-toast";

const initialState = {
  flag: null,
  isUpdating: false,
  error: null,
};

const updateUserName = createSlice({
  name: "updateUserNameSlice",
  initialState,
  reducers: {
    resetUpdateUsernameState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendRequestToChangeUserName.pending, (state) => {
        state.isUpdating = true;
      })
      .addCase(sendRequestToChangeUserName.fulfilled, (state, action) => {
        state.isUpdating = false;
        state.flag = action.payload;
        if (action.payload?.message === "User updated") {
          toast.success("User Name Updated", {
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
      })
      .addCase(sendRequestToChangeUserName.rejected, (state, action) => {
        state.isUpdating = false;
        state.error = action.payload;
      });
  },
});

export const { resetUpdateUsernameState } = updateUserName.actions;
export default updateUserName.reducer;
