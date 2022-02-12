import { createAsyncThunk } from "@reduxjs/toolkit";
import { commentService } from "../../service/commentService";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (sort, { rejectWithValue }) => {
    try {
      const comments = await commentService.getComments();
      return {
        sort,
        comments: comments.map((comment) => {
          comment.isSelected = false;
          return comment;
        }),
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchOneComment = createAsyncThunk(
  "comments/fetchOneComment",
  async (path, { rejectWithValue }) => {
    try {
      return await commentService.getOneComment(path);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
