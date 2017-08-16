import React from 'react';
import { connect } from 'react-redux';

const AboutUser = props => {
  let currentUser = props.currentUser.profile ? props.currentUser.profile : props.currentUser;
  const user = props.isAboutCurrentUser ? {
    name: `${currentUser.givenName} ${currentUser.familyName}`,
    imageUrl: currentUser.image ? currentUser.image[0].contentUrl : '',
    description: currentUser.description
  } : {
    name: props.authorName,
    imageUrl: props.authorImageUrl,
    description: currentUser.description
  };

  return !user ? <div></div> : (
    <div id='about-user' className='flex'>
      <div>
        <div id='about-user-img'
          style={{ backgroundImage: `url(${user.imageUrl})` }}>
        </div>
      </div>

      <div>
        <h4 id='about-user-name'>
          {/*
            { currentUser.givenName } { currentUser.familyName }
          */}
          { user.name }
        </h4>
        <p id='about-user-bio'>
          {/* props.currentUser.profile.description */}
          { user.description }
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps, null)(AboutUser);
