import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../models/comment.js';
import { saveBlogsComments } from '../../actions/blog_actions';
import SubmitCommentButton from './submit_comment_button';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      body: '',
      blogId: '',
      authorId: '',
      isActive: true
    };
  }

  componentDidMount() {
    this.setState({ id: Object.keys(this.props.blog.comments).length+1 });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isActive: false })
    let comment = new Comment(this.state);
    this.props.blog.comments[comment.id] = comment;
    this.props.saveBlogsComments(this.props.blogs, this.props.blog.id);
  }

  render() {
    return (
      <div id='comment-form-container'>
        <form className='comment-box' onSubmit={ this.handleSubmit.bind(this) }>
          <textarea
            id='comment-input'
            onChange={ this.handleChange('body') }
            value={ this.state.body }
            placeholder='Write a comment...'
          />

          <SubmitCommentButton actionType='Post' isActive={this.state.isActive}/>
        </form>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  blogs: state.blogs.index,
});

const mapDispatchToProps = dispatch => ({
  saveBlogsComments: (blogs, blogId) => dispatch(saveBlogsComments(blogs, blogId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
