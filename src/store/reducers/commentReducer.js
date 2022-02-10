import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
  name: "comments",
  initialState: {
    allComments: [],
    currentComment: {},
    status: "",
    error: "",
  },
  reducers: {
    error(state, action) {
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;

export const { error } = commentSlice.actions;
