import { connect } from 'react-redux';
import BlogForm from './blog_form';
import { isUserSignedIn } from 'blockstack';

import { saveUsers } from '../../../actions/user_actions';

import {
  saveBlogs,
  requestBlogs
} from '../../../actions/blog_actions';

import { saveTags } from '../../../actions/tag_actions';

const mapStateToProps = state => ({
  isUserSignedIn: isUserSignedIn(),
  currentUser: state.users.currentUser,
  blogs: state.blogs.index,
  blogIndex: state.blogs.blogIndex,
  users: state.users.index,
  tags: state.tags.index,
});

const mapDispatchToProps = dispatch => ({
  saveUsers: users => dispatch(saveUsers(users)),
  saveBlogs: blogs => dispatch(saveBlogs(blogs)),
  requestBlogs: () => dispatch(requestBlogs()),
  saveTags: tagsData => dispatch(saveTags(tagsData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);
