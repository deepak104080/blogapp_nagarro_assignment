export const LOAD_BLOGS = 'LOAD_BLOGS';
export const ADD_BLOG = 'ADD_BLOG';
export const EDIT_BLOG = 'EDIT_BLOG';
export const DELETE_BLOG = 'DELETE_BLOG';
export const LIKE_BLOG = 'LIKE_BLOG';

export const loadBlogs = () => {
  const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
  return {
    type: LOAD_BLOGS,
    payload: savedBlogs,
  };
};

export const addBlog = (blog) => ({
  type: ADD_BLOG,
  payload: blog,
});

export const editBlog = (blog) => ({
  type: EDIT_BLOG,
  payload: blog,
});

export const deleteBlog = (blogId) => ({
  type: DELETE_BLOG,
  payload: blogId,
});

export const likeBlog = (blogId) => ({
  type: LIKE_BLOG,
  payload: blogId,
});
