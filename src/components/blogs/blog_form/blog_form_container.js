import { connect } from 'react-redux';
import BlogForm from './blog_form';
import {
    saveBlogs,
    requestBlogs
} from '../../../actions/blog_actions';
import * as blockstack from 'blockstack';

const mapStateToProps = state => ({
    isUserSignedIn: blockstack.isUserSignedIn(),
    currentUser: state.session.currentUser,
    blogs: state.blogs.index,
    blogErrors: state.blogs.errors,
    blogIndex: state.blogs.blogIndex
});

const mapDispatchToProps = dispatch => ({
    saveBlogs: blogs => dispatch(saveBlogs(blogs)),
    requestBlogs: () => dispatch(requestBlogs())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogForm);
