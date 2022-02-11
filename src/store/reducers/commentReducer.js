import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../../const/status";
import { commentService } from "../../service/commentService";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (_, { rejectWithValue }) => {
    try {
      return await commentService.getComments();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

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
    [fetchComments.pending]: (state) => {
      state.status = STATUS.loading;
      state.error = "";
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = STATUS.success;
      state.allComments = action.payload;
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = STATUS.error;
      state.error = action.payload;
    },
  },
});

export default commentSlice.reducer;

export const { error } = commentSlice.actions;
