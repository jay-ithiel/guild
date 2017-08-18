import React from 'react';
import { connect } from 'react-redux';

import FollowInfo from './follow_info';

import { saveUsers } from '../../actions/user_actions';

class FollowUserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCurrentUserFollowing: this.props.isCurrentUserFollowing
    };

    this._toggleFollow = this._toggleFollow.bind(this);
  }

  _toggleFollow() {
    const { currentUser, user } = this.props;

    user.followers[currentUser.username] = !this.state.isCurrentUserFollowing;
    currentUser.following[user.username] = !this.state.isCurrentUserFollowing;
    this.setState({ isCurrentUserFollowing: !this.state.isCurrentUserFollowing });

    this.props.saveUsers(this.props.users);
  }

  render() {
    const { currentUser, user } = this.props;

    return (
      <section id='likes-form-container'>
        <FollowInfo user={user}/>
        {
          this.state.isCurrentUserFollowing ? (
            <button id='follow-btn' className='btn following--true' onClick={this._toggleFollow}>
              <span>Following</span>
            </button>
          ) : (
            <button id='follow-btn' className='btn following--false' onClick={this._toggleFollow}>
              <span>Follow</span>
            </button>
          )
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  users: state.users.index,
});

const mapDispatchToProps = dispatch => ({
  saveUsers: users => dispatch(saveUsers(users, dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowUserForm);
