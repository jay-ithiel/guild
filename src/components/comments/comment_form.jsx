import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../js_models/comment.js';
import { saveBlogs } from '../../actions/blog_actions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      body: '',
      blogId: '',
      authorId: ''
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
    let comment = new Comment(this.state);
    this.props.blog.comments[comment.id] = comment;
    this.props.saveBlogs(this.props.blogs);
  }

  render() {
    return (
      <div id='comment-form-container'>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <textarea
            id='comment-input'
            onChange={ this.handleChange('body') }
            value={ this.state.body }
            placeholder='Your comment here...'
          />

          <button id='submit-comment-btn' className='btn primary-btn'>
            Post Comment
          </button>
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
  saveBlogs: blogs => dispatch(saveBlogs(blogs))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
