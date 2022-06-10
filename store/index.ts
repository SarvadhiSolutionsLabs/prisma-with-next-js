import { configureStore } from "@reduxjs/toolkit";
import empSlice from "./empSlice";

const store = configureStore({
  reducer: {
    emp: empSlice,
  },
});

export default store;
