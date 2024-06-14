// src/CommentList.js
import React from "react";
import { ListGroup } from "react-bootstrap";

const CommentList = ({ comments }) => {
  return (
    <ListGroup className="mb-3">
      {comments.map((comment) => (
        <ListGroup.Item key={comment.id}>{comment.content}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentList;
