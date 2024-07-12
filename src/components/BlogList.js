import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { likeBlog, loadBlogs } from '../actions/blogActions';
import { BiLike } from "react-icons/bi";
import { LikedBlogsContext } from '../contexts/LikedBlogsContext';

const BlogList = () => {
  const blogs = useSelector((state) => state.blogReducer.blogs);
  const dispatch = useDispatch();
  const { likedBlogs, toggleLike } = useContext(LikedBlogsContext);
  useEffect(() => {
    dispatch(loadBlogs());
  }, [dispatch]);

  const handlelike = (blogId) => {
    dispatch(likeBlog(blogId));
    toggleLike(blogId);
  };

  return (
    <div className="row">
      <div className='col-6 bg-success bg-opacity-10'>
        <h1 className="">Blogs</h1>
      </div>

      <div className='col-6 bg-success bg-opacity-10'>
        <Link to="/new" className="btn btn-primary">
          Add New Blog
        </Link>
      </div>

      <div className='col-12 bg-info bg-opacity-10'>
        {blogs.map((blog) => (
          <div className="bg-warning bg-opacity-10 my-3 py-4 px-4" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.preview}</p>
            <p>Likes: {blog.likes}</p>
            <button onClick={() => handlelike(blog.id)} className={`btn btn-success ${likedBlogs.includes(blog.id) ? 'liked' : ''}`}> Like</button>
            <Link to={`/blog/${blog.id}`} className='btn btn-primary mx-2'>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

