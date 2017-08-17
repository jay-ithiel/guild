import React from 'react';
import { connect } from 'react-redux';

const AboutUser = ({ user }) => {
  return !user ? <div></div> : (
    <div id='about-user' className='flex'>
      <div>
        <div id='about-user-img'
          style={{ backgroundImage: `url(${user.imageUrl})` }}>
        </div>
      </div>

      <div>
        <h4 id='about-user-name'>
          { user.username }
        </h4>
        <p id='about-user-bio'>
          { user.description }
        </p>
      </div>
    </div>
  );
};

export default AboutUser;
