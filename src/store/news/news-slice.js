import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts, removePost } from "./news-operations";

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const panding = (store) => ({
  ...store,
  loading: true,
  error: null,
});

const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload.message,
});

const contactsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [fetchPosts.pending]: panding,
    [fetchPosts.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      posts: payload,
    }),
    [fetchPosts.rejected]: rejected,

    [removePost.pending]: panding,
    [removePost.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      posts: store.posts.filter((el) => el.id !== payload),
    }),
    [removePost.rejected]: rejected,
  },
});

export default contactsSlice.reducer;
