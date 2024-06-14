// src/postService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/posts";

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(API_URL, post);
  return response.data;
};

export const updatePost = async (id, post) => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
};

export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// New methods for comments
export const fetchComments = async (postId) => {
  const response = await axios.get(`${API_URL}/${postId}/comments`);
  return response.data;
};

export const createComment = async (postId, comment) => {
  const response = await axios.post(`${API_URL}/${postId}/comments`, comment);
  return response.data;
};
