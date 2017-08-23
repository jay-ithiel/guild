import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import { createUser } from '../../actions/user_actions';
import { isUserSignedIn } from 'blockstack';

class Session extends React.Component {
  componentDidMount() {
    if (isUserSignedIn()) this.props.history.push('/');
  }

  handleSignIn() {
    // redirect user to blockstack signIn
    // once signed in, check if user has an account on Guild
    // if user has an account on Guild do nothing
    // if user doesnt have an account on Guild, create a new account
  }

  handleSignUp() {
    // redirect user to blockstack signIn
    // once signed in, check if user has an account on Guild
    // if user has an account on Guild
  }

  render() {
    return this.props.isSignIn ? (
      <div id='signin' className='z-index--10'>
        <button id='session-btn' onClick={ this.handleSignIn.bind(this) } className='btn transparent-btn'>
          Sign In With Blockstack
        </button>
      </div>
    ) : (
      <div id='signin' className='z-index--10'>
        <button id='session-btn' onClick={ this.handleSignUp.bind(this) } className='btn transparent-btn'>
          Sign Up With Blockstack
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.index
})

const mapDispatchToProps = dispatch => ({
  signin: () => dispatch(signin()),
  signup: newUser => dispatch(createUser(newUser)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Session)
);
