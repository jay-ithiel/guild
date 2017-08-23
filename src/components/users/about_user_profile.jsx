import React from 'react';
import { connect } from 'react-redux';

import FollowUserForm from '../likes/follow_user_form';

const AboutUserProfile = props => {
  var { user, currentUser } = props;
  let isCurrentUserFollowing = currentUser.following[user.username] || false;

  return !user ? <div></div> : (
    <section id='about-user-profile'>
      <div id='about-user-profile-info'>
        <div className='flex-row flex-between'>
          <div>
            <h4 className='title'>{user.firstName} {user.lastName}</h4>
            <p className='regular grey margin-top--5'>{user.description}</p>
          </div>

          <div id='about-user-profile-img' className='img-large'
            style={{ backgroundImage: `url(${user.imageUrl})` }}>
          </div>
        </div>

        {
          currentUser.username === user.username ? <div></div> : (
            <FollowUserForm user={user} isCurrentUserFollowing={isCurrentUserFollowing}/>
          )
        }
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps, null)(AboutUserProfile);
