import React from 'react';
import { connect } from 'react-redux';

const AboutUser = props => {
    let currentUser = props.currentUser.profile;
    const user = props.isAboutCurrentUser ? {
        name: `${currentUser.givenName} ${currentUser.familyName}`,
        imageUrl: currentUser.image ? currentUser.image[0].contentUrl : ''
    } : {
        name: props.authorName,
        imageUrl: props.authorImageUrl
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
                    {/* { user.givenName } { user.familyName } */}
                    {/* user.name */}
                    { currentUser.givenName } { currentUser.familyName }
                </h4>
                <p id='about-user-bio'>
                    { props.currentUser.profile.description }
                </p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.session.currentUser
});

export default connect(mapStateToProps, null)(AboutUser);
