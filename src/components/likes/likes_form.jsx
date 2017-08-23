import React from 'react';
import { connect } from 'react-redux';
import CommentLikes from '../../models/commentLikes.js';
import { saveBlogsComments } from '../../actions/blog_actions';
import Heart from 'react-icons/lib/fa/heart';
import HeartO from 'react-icons/lib/fa/heart-o';

class CommentLikesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      userId: null,
      commentId:
    };
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  blogs: state.blogs.index
});

const mapDispatchToProps = dispatch => ({
  saveBlogLikes: blogs => dispatch(saveBlogsComments(blogs))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentLikesForm);
