import React from 'react';
import { connect } from 'react-redux';
import { parseDateTime } from '../../util/helper_methods.js';

const Comment = props => {
  // let currentUser = props.currentUser.profile;
  // const user = {
  //   name: `${currentUser.givenName} ${currentUser.familyName}`,
  //   imageUrl: currentUser.image ? currentUser.image[0].contentUrl : ''
  // };
  let user = props.currentUser;

  return (
    <li id='comment' className='comment-box'>
      <div className='comment-head'>
        <div id='about-user-img'
          style={{ backgroundImage: `url(${user.imageUrl})` }}>
        </div>

        <div id='about-blog-info'>
          <span className='small-med thin margin-bottom--5'>
            {
              /*
                props.comment.authorName ?
                  `${props.comment.authorName} - ${props.comment.authorId}`
                :
                  `${props.comment.authorId}`
              */
            }
            {props.comment.authorId}
          </span>
          <span>{parseDateTime(props.comment.createdAt)}</span>
        </div>
      </div>

      <p className='comment-body'>
        {props.comment.body}
      </p>
    </li>
  );
};

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps, null)(Comment);
