import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../../../actions/session_actions';

const GuestNavMenu = props => (
  <div id='guest-nav-menu'>
    <span className='btn white thin letter-space-1' onClick={ props.signin }>Sign In </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  signin: () => dispatch(signin())
});

export default connect(null, mapDispatchToProps)(GuestNavMenu);
