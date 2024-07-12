
import React, { createContext, useContext, useState } from 'react';

export const LikedBlogsContext = createContext();

export const LikedBlogsProvider = ({ children }) => {
  const [likedBlogs, setLikedBlogs] = useState([]);

  console.log(likedBlogs);

  const toggleLike = (blogId) => {
    // to Check if the blog is already liked, and toggle its state
    if (likedBlogs.includes(blogId)) {
      setLikedBlogs(likedBlogs.filter((id) => id !== blogId));
    } else {
      setLikedBlogs([...likedBlogs, blogId]);
    }
  };

  return (
    <LikedBlogsContext.Provider value={{ likedBlogs, toggleLike }}>
      {children}
    </LikedBlogsContext.Provider>
  );
};
