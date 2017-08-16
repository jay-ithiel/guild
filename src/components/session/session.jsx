import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import { createUser } from '../../actions/user_actions';
import { isUserSignedIn, loadUserData } from 'blockstack';

class Session extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (isUserSignedIn()) this.props.history.push('/');
  }

  handleSignIn() {
    let blockstackUserInfo = loadUserData();
    if (this.props.users) {

    }
  }

  handleSignUp() {

  }

  render() {
    return this.props.isSignIn ? (
      <div id='signin' className='z-index--10'>
        <button id='session-btn' onClick={ this.handleSignIn.bind(this) } className='btn transparent-btn'>
          Sign In With Blockstack
        </button>
      </div>
    ) : (
      <div id='signin' className='z-index--10 margin-top--10'>
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
