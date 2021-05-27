import { configureStore } from "@reduxjs/toolkit";

import carouselReducer from "./carousel/carouselSlice";

const store = configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});

export default store;
