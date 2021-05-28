import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IactiveSlideInfo {
  linkToView: string;
  linkToWatchCode: string;
  title: string;
  stack: string;
}

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
    setInfo: (state, action: PayloadAction<IactiveSlideInfo>) => {
      state.activeSlideInfo = action.payload;
    },
  },
});

export const { setInfo } = carouselSlice.actions;

export default carouselSlice.reducer;
