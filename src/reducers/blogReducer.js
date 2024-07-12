import {
  LOAD_BLOGS,
  ADD_BLOG,
  EDIT_BLOG,
  DELETE_BLOG,
  LIKE_BLOG,
} from '../actions/blogActions';

const initialState = {
  blogs: [], //blog data is stored here
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case ADD_BLOG:
      // to save to localStorage
      const newBlogs = [...state.blogs, action.payload];
      localStorage.setItem('blogs', JSON.stringify(newBlogs));
      return {
        ...state,
        blogs: newBlogs,
      };
    case EDIT_BLOG:
      const updatedBlogs = state.blogs.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
      localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
      return {
        ...state,
        blogs: updatedBlogs,
      };
    case DELETE_BLOG:
      const remainingBlogs = state.blogs.filter((blog) => blog.id !== action.payload);
      localStorage.setItem('blogs', JSON.stringify(remainingBlogs));
      return {
        ...state,
        blogs: remainingBlogs,
      };
      case LIKE_BLOG:
        const likedBlogs = state.blogs.map((blog) =>
          blog.id === action.payload ? { ...blog, likes: blog.likes + 1 } : blog
        );
        localStorage.setItem('blogs', JSON.stringify(likedBlogs));
        return {
          ...state,
          blogs: likedBlogs,
        };
    default:
      return state;
  }
};

export default blogReducer;
