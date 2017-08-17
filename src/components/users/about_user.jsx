import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import FollowUserForm from '../likes/follow_user_form';

import { requestUsers } from '../../actions/user_actions';

const AboutUser = props => {
  var { user, currentUser } = props;
  let isCurrentUserFollowing = currentUser.following[user.username] || false;

  return !user ? <div></div> : (
    <div id='blog-link' className='position-relative'>
      <div className='flex'>
        <div>
          <div id='about-user-img'
            style={{ backgroundImage: `url(${user.imageUrl})` }}>
          </div>
        </div>

        <div>
          <h4 id='about-user-name'>
            {user.firstName} {user.lastName} - <span className='small'>{user.username}</span>
          </h4>
          <p id='about-user-bio'>
            { user.description }
          </p>
        </div>
      </div>

      {
        currentUser.username === user.username ? <div></div> : (
          <FollowUserForm user={user} isCurrentUserFollowing={isCurrentUserFollowing}/>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps, null)(AboutUser);
