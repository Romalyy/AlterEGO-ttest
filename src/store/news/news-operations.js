import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getPost,
  deletePost,
} from "../../servises/news";

export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (data, { rejectWithValue }) => {
    try {
      return await getPost();
    } catch (error) {
      const { data, status } = error.response;
        const {message} = error;
        const {responseURL}= error.response.request;
        return rejectWithValue({ data, status, message,responseURL });
    }
  }
);
export const removePost = createAsyncThunk(
  "posts/remove",
  async (data, { rejectWithValue }) => {
    try {
      return await deletePost(data);
    } catch (error) {
      const { data, status } = error.response;
        const {message} = error;
        const {responseURL}= error.response.request;
        return rejectWithValue({ data, status, message,responseURL });
    }
  }
);
