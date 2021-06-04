import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IactiveSlideInfo {
  title: string;
  link: string;
}

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    activeSlideInfo: {
      title: "",
      link: "",
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
