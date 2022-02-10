import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    allComments: [],
    status: "",
    error: "",
  },
  reducers: {
    searchСomments(state) {
      return state;
    },
  },
});

export default commentSlice.reducers;

export const { searchСomments } = commentSlice.actions;
