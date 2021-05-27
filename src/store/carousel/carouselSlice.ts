import { createSlice } from "@reduxjs/toolkit";

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    activeSlideInfo: {
      linkToView: "#",
      linkToWatchCode: "#",
      title: "",
      stack: "",
    },
  },
  reducers: {
    setInfo: (state, payload) => {
      console.log(payload);
    },
  },
});

export const { setInfo } = carouselSlice.actions;

export default carouselSlice.reducer;
