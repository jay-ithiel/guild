import merge from 'lodash/merge';
import {
  RECEIVE_BLOGS,
  RECEIVE_USER_BLOGS
} from '../actions/blog_actions';

const _defaultState = {
  index: {},
  userBlogs: {},
  errors: [],
  blogIndex: 1
};

const BlogReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  
  switch(action.type) {
    case RECEIVE_BLOGS:
      newState.index = action.blogs;
      newState.blogIndex = action.blogIndex;
      newState.errors = [];
      return newState;

    case RECEIVE_USER_BLOGS:
      newState.userBlogs = action.userBlogs;
      newState.errors = [];
      return newState;

    default:
      return oldState;
  }
};

export default BlogReducer;
