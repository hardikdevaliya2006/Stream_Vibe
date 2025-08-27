import { createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../../Services/authApi";
import toast from "react-hot-toast";
import { sendRequestloginUser } from "./sendRequestloginUser.action";

export const sendRequestCreateUser = createAsyncThunk(
  "RequestCreateUser/sendRequestCreateUser",
  async (newUserCredentials, thunkApi) => {
    try {
      const registerResponse = await authApi.post("/register", newUserCredentials);

      const singupAfterLogin = await thunkApi.dispatch(
        sendRequestloginUser({
          email: newUserCredentials.email,
          password: newUserCredentials.password,
          newUser: true,
        })
      );

      return singupAfterLogin.payload;
    } catch (error) {
      const apiErrorMsg =
        error?.response?.data?.error ||
        "Something went wrong during registration";

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
