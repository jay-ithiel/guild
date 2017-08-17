import React from 'react';
import { connect } from 'react-redux';

import AboutUserProfile from './about_user_profile';
import Blogs from '../blogs/blogs';

import { requestUsers } from '../../actions/user_actions';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    if (Object.keys(this.props.users).length > 0) {
      this.setState({ users: this.props.users });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }

  _setUser() {
    let username = this.props.history.location.pathname.substring(7);
    return this.state.users[username];
  }

  render() {
    let user = this._setUser.bind(this)();

    return !user ? <div></div> : (
      <div id='profile'>
        <AboutUserProfile user={user}/>
        <Blogs isProfileBlogs={true} user={user}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.index
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
