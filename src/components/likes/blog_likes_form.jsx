import React from 'react';
import { connect } from 'react-redux';

// import BlogLikes from '../../models/blogLikes.js';
import Heart from 'react-icons/lib/fa/heart';
import HeartO from 'react-icons/lib/fa/heart-o';

import { saveBlogsLikes } from '../../actions/blog_actions';
import { saveUsers } from '../../actions/user_actions';


class BlogLikesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      userId: null,
      blogId: null,
      doesUserLikeBlog: this.props.doesUserLikeBlog,
    };

    this.toggleLike = this.toggleLike.bind(this);
    this.deleteLike = this.deleteLike.bind(this);
    this.postLike = this.postLike.bind(this);
  }

  toggleLike() {
    if (this.state.doesUserLikeBlog) {
      this.setState({ doesUserLikeBlog: false });
      this.deleteLike();
    } else {
      this.setState({ doesUserLikeBlog: true });
      this.postLike();
    }
  }

  postLike() {
    const currentUser = this.props.currentUser;
    this.props.blog.likes[currentUser.username] = true;
    this.props.saveBlogLikes(this.props.blogs);

    // Add new Like to currentUser's likedBlogs and save Users
    this.props.currentUser.likedBlogs[this.props.blog.id] = true;
    this.props.saveUsers(this.props.users);
  }

  deleteLike() {
    const currentUser = this.props.currentUser;
    this.props.blog.likes[currentUser.username] = false;
    this.props.saveBlogLikes(this.props.blogs);

    // Remove new Like to currentUser's likedBlogs and save Users
    this.props.currentUser.likedBlogs[this.props.blog.id] = false;
    this.props.saveUsers(this.props.users);
  }

  render() {
    return (
      <section id='likes-form-container'>
        {
          this.state.doesUserLikeBlog ? (
            <Heart id='heart' className='heart--active' size={23} onClick={this.toggleLike}/>
          ) : (
            <HeartO id='heart' className='heart--inactive' size={23} onClick={this.toggleLike}/>
          )
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  blogs: state.blogs.index,
  users: state.users.index,
});

const mapDispatchToProps = dispatch => ({
  saveBlogLikes: blogs => dispatch(saveBlogsLikes(blogs)),
  saveUsers: users => dispatch(saveUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogLikesForm);
