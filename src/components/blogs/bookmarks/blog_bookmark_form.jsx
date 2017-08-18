import React from 'react';
import { connect } from 'react-redux';

import Bookmark from 'react-icons/lib/fa/bookmark';
import BookmarkO from 'react-icons/lib/fa/bookmark-o';

import { saveUsers } from '../../../actions/user_actions';

class BlogBookmarkForm extends React.Component {
  constructor(props) {
    super(props);

    const { currentUser, blog } = this.props;
    
    this.state = {
      didUserBookmarkBlog: currentUser.bookmarkedBlogs[blog.id] ? true : false
    };

    this._toggleBookmark = this._toggleBookmark.bind(this);
  }

  _toggleBookmark() {
    const { currentUser, blog } = this.props;
    let toggledBookmarkValue = !this.state.didUserBookmarkBlog;

    currentUser.bookmarkedBlogs[blog.id] = toggledBookmarkValue;
    this.setState({ didUserBookmarkBlog: toggledBookmarkValue });

    this.props.saveUsers(this.props.users);
  }

  render() {
    return (
      <section id='likes-form-container'>
        {
          this.state.didUserBookmarkBlog ? (
            <Bookmark id='bookmark' className='btn bookmark--active' size={23} onClick={this._toggleBookmark}/>
          ) : (
            <BookmarkO id='bookmark' className='btn bookmark--inactive' size={23} onClick={this._toggleBookmark}/>
          )
        }
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  users: state.users.index
});

const mapDispatchToProps = dispatch => ({
  saveUsers: users => dispatch(saveUsers(users, dispatch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogBookmarkForm);
