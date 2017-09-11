import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { isUserSignedIn, isSignInPending, loadUserData } from 'blockstack';
import { requestBlogs, requestUserBlogs } from '../../actions/blog_actions';

import Feed from '../feed/feed';
import BlogLink from './blog_link/blog_link';
import SignInPage from '../session/signin_page';
import LoadingScreen from '../home/loading_screen';

// var Loader = require('react-loaders').Loader;

class Blogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: null,
      isUserBlogs: props.history.location.pathname === '/' ? false : true,
      isProfileBlogs: props.isProfileBlogs,
      tags: {},
      popularTags: {},
      feedBlogs: {}
    };

    this.mapBlogLinks = this.mapBlogLinks.bind(this);
    this.requestBlogs = this.requestBlogs.bind(this);
  }

  componentDidMount() {
    // If there is no currentUser, user hasn't logged in yet so don't fetch blogs
    if (!this.props.currentUser) { return; }
    this.requestBlogs();

    if (this.state.isProfileBlogs) {
      this.setState({ blogs: this.props.user.authoredBlogs });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.blogs) this.requestBlogs();

    if (this.state.isProfileBlogs) {
      this.setState({ blogs: this.props.user.authoredBlogs });
    }
    else if (this.state.isUserBlogs) {
      this.setState({ blogs: nextProps.userBlogs });
    }
    else {
      this.setState({ blogs: nextProps.blogs });
    }

    this.setState({ tags: nextProps.tags });
    this.setState({ popularTags: nextProps.popularTags });
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
      <BlogLink
        key={index}
        blog={ this.state.blogs[blogId] }
        isUserBlogs={ this.state.isUserBlogs }
      />
    ));
  }

  mapFeedBlogs() {
    if (this.state.popularTags.length === 0) return {};

    let feedBlogs = {};
    let popularTagBlogIds, blogId, blog;

    // this.state.popularTags.forEach(popularTag => {
    Object.keys(this.state.popularTags).forEach(popularTag => {
      popularTagBlogIds = Object.keys(this.state.tags[popularTag].blogs).slice(0,4);

      for (let i = 0; i < 4; i++) {
        blogId = popularTagBlogIds[i];
        if (!blogId) break;
        blog = this.state.blogs[blogId];

        if (feedBlogs[popularTag]) {
          feedBlogs[popularTag].push(blog);
        } else {
          feedBlogs[popularTag] = [blog];
        }
      }
    });

    return feedBlogs;
  }

  mapFeeds() {
    let feedBlogs = this.mapFeedBlogs.bind(this)();

    return Object.keys(feedBlogs).map((popularTag, index) => (
      <Feed
        key={index}
        category={popularTag}
        blogs={feedBlogs[popularTag]}
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
    let feedComponents = this.mapFeeds.bind(this)();

    console.log(`feedComponents: ${feedComponents}`);
    console.dir(feedComponents);

    return blogLinks.length === 0 ? (
      <ul id='blogs' className='border-box-sizing'>
        {
          this.state.isProfileBlogs ? (
            <h4 className='blogs-section-head'>
              { `${this.props.user.firstName} hasn't written any blogs yet.` }
            </h4>
          ) : this.state.isUserBlogs ? (
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
        {/* this.state.isUserBlogs || this.state.isProfileBlogs ? <div></div> : <Feed/> */}
        { this.state.isUserBlogs || this.state.isProfileBlogs ? <div></div> : feedComponents }
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
  users: state.users.index,
  tags: state.tags.index,
  popularTags: state.tags.popularTags
});

const mapDispatchToProps = dispatch => ({
  requestBlogs: () => dispatch(requestBlogs()),
  requestUserBlogs: user => dispatch(requestUserBlogs(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Blogs)
);
