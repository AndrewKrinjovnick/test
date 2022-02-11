import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../const/status";
import { fetchComments, fetchOneComment } from "../requests/comments";

const setError = (state, action) => {
  state.status = STATUS.error;
  state.error = action.payload;
};

const setStatusPending = (state) => {
  state.status = STATUS.loading;
  state.error = "";
};

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
  extraReducers: {
    [fetchComments.pending]: setStatusPending,
    [fetchComments.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.allComments = action.payload;
    },
    [fetchComments.rejected]: setError,
    [fetchOneComment.pending]: setStatusPending,
    [fetchOneComment.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.currentComment = action.payload;
    },
    [fetchOneComment.rejected]: setError,
  },
});

export default commentSlice.reducer;

export const { error } = commentSlice.actions;
