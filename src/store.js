import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
import blogReducer from './reducers/blogReducer';

const rootReducer = combineReducers({
  blogReducer, 
});

//Redux Thunk for async actions
const middleware = [thunk];

// Created the Redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
