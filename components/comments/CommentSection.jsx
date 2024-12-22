"use client";

import { useState } from 'react';
import Comments from './Comments';
import { useAuth } from '../auth/AuthProvider';

const CommentSection = () => {
  const {isCommentsOpen, setIsCommentsOpen}=useAuth()

  const toggleComments = () => {
    setIsCommentsOpen(true);
  };

  return (
    <div>
      <button onClick={toggleComments}>
        10 comments
      </button>

      {isCommentsOpen && <Comments />}
    </div>
  );
};

export default CommentSection;
