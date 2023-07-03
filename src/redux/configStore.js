import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    project: (state = "EX5-REACT-FORM", action) => {
      return state;
    },
  },
});
