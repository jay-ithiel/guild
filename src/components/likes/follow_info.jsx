import React from 'react';
// import { connect } from 'react-redux';

const FollowInfo = ({ user }) => {
  return (
    <div id='follow-info-box' className='full-width flex'>
      <h4 id='follow-info' className='skinny font-size--14 letter-space-1 grey'>
        <span className='bold'>{Object.keys(user.followers).length}</span> Followers
      </h4>
      <h4 id='follow-info' className='skinny font-size--14 letter-space-1 grey'>
        <span className='bold'>{Object.keys(user.following).length}</span> Following
      </h4>
    </div>
  );
};

export default FollowInfo;
