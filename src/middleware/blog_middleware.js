import {
  REQUEST_BLOGS,
  REQUEST_USER_BLOGS,
  DELETE_BLOG,
  SAVE_BLOGS,
  SAVE_BLOGS_COMMENTS,
  SAVE_BLOGS_LIKES,
} from '../actions/blog_actions';

import {
  saveBlogs,
  saveBlogsComments,
  saveBlogsLikes,
  fetchBlogs,
  fetchUserBlogs,
  deleteBlog,
} from '../util/blog_api_util';

const BlogMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case SAVE_BLOGS:
      saveBlogs(action.blogs, dispatch);
      return next(action);

    case SAVE_BLOGS_COMMENTS:
      saveBlogsComments(action.blogs, action.blogId);
      return next(action);

    case SAVE_BLOGS_LIKES:
      saveBlogsLikes(action.blogs);
      return next(action);

    case REQUEST_BLOGS:
      fetchBlogs(dispatch); // eslint-disable-line
      return next(action);

    case REQUEST_USER_BLOGS:
      fetchUserBlogs(action.user, dispatch);
      return next(action);

    case DELETE_BLOG:
      deleteBlog(action.id, dispatch);
      return next(action);

    default:
      return next(action);
  }
};

export default BlogMiddleware;
