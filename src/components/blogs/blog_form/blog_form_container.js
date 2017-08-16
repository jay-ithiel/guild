import { connect } from 'react-redux';
import BlogForm from './blog_form';
import * as blockstack from 'blockstack';
import {
  saveBlogs,
  requestBlogs
} from '../../../actions/blog_actions';
import { saveUsers } from '../../../actions/user_actions';

const mapStateToProps = state => ({
  isUserSignedIn: blockstack.isUserSignedIn(),
  currentUser: state.session.currentUser,
  blogs: state.blogs.index,
  blogErrors: state.blogs.errors,
  blogIndex: state.blogs.blogIndex,
  users: state.users.index
});

const mapDispatchToProps = dispatch => ({
  saveBlogs: blogs => dispatch(saveBlogs(blogs)),
  requestBlogs: () => dispatch(requestBlogs()),
  saveUsers: users => dispatch(saveUsers(users))
});

export default connect( mapStateToProps, mapDispatchToProps)(BlogForm);
