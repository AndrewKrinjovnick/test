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
    filteredComments: [],
    status: "",
    error: "",
  },
  reducers: {
    findСomments(state, action) {
      state.filteredComments = state.allComments.filter((comment) => {
        return comment.email.includes(action.payload);
      });
    },
  },
  extraReducers: {
    [fetchComments.pending]: setStatusPending,
    [fetchComments.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.allComments = action.payload;
      state.filteredComments = action.payload;
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

export const { findСomments } = commentSlice.actions;
