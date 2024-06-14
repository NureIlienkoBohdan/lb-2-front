// src/PostForm.js
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const PostForm = ({ currentPost, isEditing, handleSubmit }) => {
  const [post, setPost] = useState({ title: "", content: "" });

  useEffect(() => {
    setPost(currentPost);
  }, [currentPost]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(post);
  };

  return (
    <Form onSubmit={onSubmit} className="mb-4">
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="formContent">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={post.content}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        {isEditing ? "Update" : "Create"} Post
      </Button>
    </Form>
  );
};

export default PostForm;
