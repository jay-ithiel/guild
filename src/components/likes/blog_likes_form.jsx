import React from 'react';
import { connect } from 'react-redux';
import BlogLikes from '../../models/blogLikes.js';
import { saveBlogsLikes } from '../../actions/blog_actions';
import Heart from 'react-icons/lib/fa/heart';
import HeartO from 'react-icons/lib/fa/heart-o';

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
  }

  deleteLike() {
    const currentUser = this.props.currentUser;
    this.props.blog.likes[currentUser.username] = false;
    this.props.saveBlogLikes(this.props.blogs);
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
  currentUser: state.session.currentUser,
  blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({
  saveBlogLikes: blogs => dispatch(saveBlogsLikes(blogs))
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogLikesForm);
