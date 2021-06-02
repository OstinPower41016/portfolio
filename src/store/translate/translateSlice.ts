import { createSlice } from "@reduxjs/toolkit";

const translateSlice = createSlice({
  name: "carousel",
  initialState: {
    locale: "en",
  },
  reducers: {
    toggleLanguage: (state) => {
      if (state.locale === "en") {
        state.locale = "ru";
      } else {
        state.locale = "en";
      }
    },
  },
});

export const { toggleLanguage } = translateSlice.actions;

export default translateSlice.reducer;
