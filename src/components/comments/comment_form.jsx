import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../models/comment.js';

import { saveBlogsComments } from '../../actions/blog_actions';
import { saveUsers } from '../../actions/user_actions';

import SubmitCommentButton from './submit_comment_button';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      body: '',
      blogId: props.blog.id,
      authorId: props.currentUser.username,
      isActive: true,
      placeholder: 'Write a comment...'
    };
  }

  componentDidMount() {
    this.setState({ id: Object.keys(this.props.blog.comments).length + 1 });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    // Bare bones error handler
    if (this.state.body.length === 0) {
      this.setState({ placeholder: 'Your comment cannot be blank.' });
      return;
    }

    this.setState({ isActive: false })
    let comment = new Comment(this.state);

    // Add new Comment to blogs state and save Comments
    this.props.blog.comments[comment.id] = comment;
    this.props.saveBlogsComments(this.props.blogs, this.props.blog.id);


    // TODO Update Blog author's `authoredBlogs` state before dispatching saveUsers
    // Add new Comment to currentUser's authoredComments and save Users
    this.props.currentUser.authoredComments[comment.id] = comment;
    this.props.saveUsers(this.props.users);

  }

  render() {
    return (
      <div id='comment-form-container'>
        <form className='comment-box' onSubmit={ this.handleSubmit.bind(this) }>
          <textarea
            id='comment-input'
            onChange={ this.handleChange('body') }
            value={ this.state.body }
            placeholder={this.state.placeholder}
          />

          <SubmitCommentButton actionType='Post' isActive={this.state.isActive}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  blogs: state.blogs.index,
  users: state.users.index,
});

const mapDispatchToProps = dispatch => ({
  saveBlogsComments: (blogs, blogId) => dispatch(saveBlogsComments(blogs, blogId)),
  saveUsers: users => dispatch(saveUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
