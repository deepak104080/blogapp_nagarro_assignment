import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { loadBlogs } from './actions/blogActions';
import { LikedBlogsProvider } from './contexts/LikedBlogsContext';

store.dispatch(loadBlogs());

ReactDOM.render(
  <Provider store={store}>
      <LikedBlogsProvider>
        <App />
      </LikedBlogsProvider>
  </Provider>,
  document.getElementById('root')
);
