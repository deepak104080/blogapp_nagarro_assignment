import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBlog, editBlog } from '../actions/blogActions';
import { useParams, useNavigate, Link } from 'react-router-dom';

const BlogForm = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogReducer.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEditMode = !!id;
  const initialBlog = isEditMode
    ? blogs.find((blog) => blog.id === Number(id))
    : { title: '', content: '' };

  const [blog, setBlog] = useState(initialBlog);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      dispatch(editBlog({ ...blog, id: Number(id) }));
    } else {
      dispatch(addBlog({ ...blog, id: Date.now(), likes: 0 }));
    }
    // goes to the bloglist to view the new blog
    navigate('/');
  };

  return (
    <div className="row">
      <div className='col-6 bg-success bg-opacity-10'>
        <h1 className="centered-text">Your Blogs</h1>
      </div>

      <div className='col-6 bg-success bg-opacity-10'>
        <Link to="/" className="btn btn-warning">Back</Link>
      </div>

      <div className='col-12 bg-info bg-opacity-10'>
        <div className="blog-form">
          <h2>{isEditMode ? 'Edit Blog' : 'Add Blog'}</h2>
          <form>
            <input
              type="text"
              placeholder="Title"
              value={blog.title}
              onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            />
            <br></br>
            <textarea
              placeholder="Content"
              value={blog.content}
              onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            />
            <br></br>
            <button className='btn btn-success' onClick={handleSubmit}>
              {isEditMode ? 'Update Blog' : 'Add Blog'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
