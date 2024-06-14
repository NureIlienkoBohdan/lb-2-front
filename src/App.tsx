// src/App.js
import React, { useState, useEffect } from "react";
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from "./services/postService";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  const handleSubmit = async (post) => {
    if (isEditing) {
      await updatePost(currentPost.id, post);
    } else {
      await createPost(post);
    }
    fetchPosts().then((data) => setPosts(data));
    setCurrentPost({ title: "", content: "" });
    setIsEditing(false);
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts().then((data) => setPosts(data));
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Posts</h1>
          <PostForm
            currentPost={currentPost}
            isEditing={isEditing}
            handleSubmit={handleSubmit}
          />
          <PostList
            posts={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
