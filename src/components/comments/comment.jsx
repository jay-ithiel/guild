import React from 'react';

const Comment = props => (
  <div className='comment'>
    <div className='comment-head'>
      <h4 className='comment-author'>
        {props.comment.author_name}
      </h4>
    </div>

    <p className='comment-body'>
      {props.comment.body}
    </p>
  </div>
);

export default Comment;
