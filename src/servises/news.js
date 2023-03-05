import axios from "axios";

export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPost = async () => {
  const { data } = await instance.get("/posts");
  return data;
};

export const deletePost = async (id) => {
  await instance.delete(`/posts/${id}`);
  return id;
};
