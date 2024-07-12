import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { deleteBlog, likeBlog } from '../actions/blogActions';
import { BiLike } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogReducer.blogs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    // return <div>Blog not found</div>;
    return navigate('/');
  }

  return (
    <div className="row">
      <div className='col-6 bg-success bg-opacity-10'>
        <h1 className="">Your Blogs</h1>
      </div>

      <div className='col-6 bg-success bg-opacity-10'>
        <Link to="/" className="btn btn-warning">Back</Link>
      </div>

      <div className='col-12 bg-info bg-opacity-10'>

        <div className="">
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <p>Likes: {blog.likes}</p>
          <button onClick={() => dispatch(likeBlog(blog.id))} className='btn btn-success'>Like</button>
          <button onClick={() => dispatch(deleteBlog(blog.id))} className='btn btn-danger'>Delete</button>
          <Link to={`/edit/${blog.id}`} className="btn btn-info" >Edit</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
