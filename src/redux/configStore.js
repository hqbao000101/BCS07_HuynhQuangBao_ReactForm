import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./reducer/studentReducer";

export const store = configureStore({
  reducer: {
    project: (state = "ex5-react-form", action) => {
      return state;
    },
    student: studentReducer,
  },
});
