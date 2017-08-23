import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.mapComments = this.mapComments.bind(this);
  }

  // Maps blog's comments to Comment component
  mapComments() {
    let commentLis = Object.keys(this.props.comments);
    if (commentLis.length === 0) {
      return (
        <h4 className='text-align-center skinny letter-space-1 medium margin-top--15'>
          Be the first to make a comment!
        </h4>
      );
    } else {
      return commentLis.map((id, i) => (
        <li key={i}>
          <Comment blog={ this.props.blog } comment={ this.props.comments[id] }/>
        </li>
      ));
    }
  }

  render() {
    let commentLis = this.mapComments();

    return (
      <div id='comments-container'>
        <h3 className='header'>COMMENTS</h3>
        <ul id='comments'>{commentLis}</ul>
      </div>
    );
  }
}

export default Comments;
