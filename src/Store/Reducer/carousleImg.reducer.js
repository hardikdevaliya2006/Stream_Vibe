import { createSlice } from "@reduxjs/toolkit";
import { fetchCarouselImg } from "../Actions/fetchCarouselImg.action";

const carousleImgSlice = createSlice({
  name: "carousleImg",
  initialState: {
    carousleImg: [],
    carousleImgLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarouselImg.pending, (state) => {
        state.carousleImgLoading = true;
      })
      .addCase(fetchCarouselImg.fulfilled, (state, action) => {
        state.carousleImgLoading = false;
        state.carousleImg = action.payload;
      })
      .addCase(fetchCarouselImg.rejected, (state, action) => {
        state.carousleImgLoading = true;
        state.error = action.payload;
      });
  },
});

export default carousleImgSlice.reducer;
