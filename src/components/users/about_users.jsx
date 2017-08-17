import React from 'react';
import { connect } from 'react-redux';

import AboutUser from './about_user';

class AboutUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }

  mapAboutUserLinks() {
    return Object.keys(this.state.users).map(username => (
      <AboutUser
        currentUser={this.state.users[username]}
        isAboutCurrentUser={false}
      />
    ));
  }

  render() {
    return (
      <div>
        About Users
      </div>
    );
  }
};

const mapStateToProps = state => ({
  users: state.users.index
});

export default connect(mapStateToProps, null)(AboutUsers);
