import { configureStore } from "@reduxjs/toolkit";
import commentReduce from "./reducers/commentReducer";

export const store = configureStore({
  reducer: {
    comments: commentReduce,
  },
});
