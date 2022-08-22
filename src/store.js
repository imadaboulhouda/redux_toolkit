import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./reducer/TodoReducer";

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
