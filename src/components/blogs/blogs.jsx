import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isUserSignedIn, isSignInPending, loadUserData } from 'blockstack';
import { requestBlogs, requestUserBlogs } from '../../actions/blog_actions';

import BlogLink from './blog_link/blog_link';
import SignInPage from '../session/signin_page';
import LoadingScreen from '../home/loading_screen';

// var Loader = require('react-loaders').Loader;

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: null,
      isUserBlogs: props.history.location.pathname === '/' ? false : true
    };

    this.mapBlogLinks = this.mapBlogLinks.bind(this);
    this.requestBlogs = this.requestBlogs.bind(this);
  }

  componentDidMount() {
    // If there is no currentUser, user hasn't logged in yet so don't fetch blogs
    if (!this.props.currentUser) { return; }
    this.requestBlogs();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.blogs) { this.requestBlogs(); }
    if (this.state.isUserBlogs) {
      this.setState({ blogs: nextProps.userBlogs });
    } else {
      this.setState({ blogs: nextProps.blogs });
    }
  }

  requestBlogs() {
    if (this.state.isUserBlogs) {
      this.props.requestUserBlogs(loadUserData());
    } else {
      this.props.requestBlogs();
    }
  }

  mapBlogLinks() {
    return Object.keys(this.state.blogs).reverse().map((blogId, index) => (
      <BlogLink key={index}
        blog={ this.state.blogs[blogId] }
        isUserBlogs={ this.state.isUserBlogs }
      />
    ));
  }

  render() {
    // If user is not signed in or hasn't made a signIn request, we will render the signInPage since Blockstack Gaia storage isn't available unless signed in.
    if (!isUserSignedIn() && !isSignInPending()) { return <SignInPage/> }

    // If this.state.blogs is null, the component hasn't received the blogs from storage yet, so it will render a loading icon
    if (this.state.blogs === null) { return <LoadingScreen/> }

    let blogLinks = this.mapBlogLinks();
    let blogsHead = this.state.isUserBlogs ? 'Your Blogs' : 'Recent Blogs';

    return blogLinks.length === 0 ? (
      <ul id='blogs' className='border-box-sizing'>
        {
          this.state.isUserBlogs ? (
            <h4 className='blogs-section-head'>
              { `You haven't written any blogs yet.` } <a className='primary-green underline-hover' href='/blogs/new'>Write a story!</a>
            </h4>
          ) : (
            <h4 className='blogs-section-head'>
              No blogs have been written yet. Be the first to <a className='primary-green underline-hover' href='blogs/new'>write a story!</a>
            </h4>
          )
        }
      </ul>
    ) : (
      <ul id='blogs' className='border-box-sizing'>
        <h4 className='blogs-section-head'>{ blogsHead }</h4>
        { blogLinks }
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  blogs: state.blogs.index,
  userBlogs: state.blogs.userBlogs,
  users: state.users.index
});

const mapDispatchToProps = dispatch => ({
  requestBlogs: () => dispatch(requestBlogs()),
  requestUserBlogs: user => dispatch(requestUserBlogs(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Blogs)
);
