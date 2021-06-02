import { configureStore } from "@reduxjs/toolkit";

import carouselReducer from "./carousel/carouselSlice";
import translateSlice from "./translate/translateSlice";

const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    translate: translateSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
