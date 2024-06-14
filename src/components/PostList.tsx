// src/PostList.js
import React, { useState, useEffect } from "react";
import { Card, Button, Collapse } from "react-bootstrap";
import { fetchComments, createComment } from "../services/postService";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const PostList = ({ posts, handleEdit, handleDelete }) => {
  const [openPostId, setOpenPostId] = useState(null);
  const [comments, setComments] = useState({});

  useEffect(() => {
    if (openPostId !== null) {
      fetchComments(openPostId).then((data) =>
        setComments((prev) => ({ ...prev, [openPostId]: data }))
      );
    }
  }, [openPostId]);

  const handleCommentSubmit = (postId, comment) => {
    createComment(postId, comment).then((newComment) => {
      setComments((prev) => ({
        ...prev,
        [postId]: [...prev[postId], newComment],
      }));
    });
  };

  return (
    <div>
      {posts.map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content}</Card.Text>
            <Button
              variant="warning"
              onClick={() => handleEdit(post)}
              className="mr-2"
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(post.id)}
              className="mr-2"
            >
              Delete
            </Button>
            <Button
              variant="info"
              onClick={() =>
                setOpenPostId(openPostId === post.id ? null : post.id)
              }
              aria-controls={`comments-${post.id}`}
              aria-expanded={openPostId === post.id}
            >
              {openPostId === post.id ? "Hide Comments" : "Show Comments"}
            </Button>
            <Collapse in={openPostId === post.id}>
              <div id={`comments-${post.id}`} className="mt-3">
                <CommentList comments={comments[post.id] || []} />
                <CommentForm
                  postId={post.id}
                  handleSubmit={handleCommentSubmit}
                />
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
