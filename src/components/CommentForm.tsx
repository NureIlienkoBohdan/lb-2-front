// src/CommentForm.js
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const CommentForm = ({ postId, handleSubmit }) => {
  const [comment, setComment] = useState({ content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(postId, comment);
    setComment({ content: "" });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formContent">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          name="content"
          value={comment.content}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Comment
      </Button>
    </Form>
  );
};

export default CommentForm;
