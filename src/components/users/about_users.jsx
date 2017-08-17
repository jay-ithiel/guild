import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AboutUser from './about_user';

import { requestUsers } from '../../actions/user_actions';

class AboutUsers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}
    };
  }

  componentDidMount() {
    debugger;
    this.props.requestUsers();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ users: nextProps.users });
  }

  mapAboutUserLinks() {
    return Object.keys(this.state.users).map(username => (
      <li id='about-user-link' className='with-container'>
        <AboutUser user={this.state.users[username]}/>
      </li>
    ));
  }

  render() {
    let aboutUserLinks = this.mapAboutUserLinks.bind(this)();

    return (
      <div>
        { aboutUserLinks }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  users: state.users.index
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutUsers);
