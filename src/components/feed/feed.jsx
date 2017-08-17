import React from 'react';
import { connect } from 'react-redux';

import FeedBlog from './feed_blog';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='feed'>
        <h4 id='feed-category'>
          <p id='feed-category-title'>Feed Category</p>
          <span className='small skinny letter-space-1 margin-left--10'>POPULAR</span>
        </h4>
        <div id='feed-blogs'>
          <FeedBlog/>
          <FeedBlog/>
          <FeedBlog/>
          <FeedBlog/>
        </div>
      </section>
    );
  }
}

export default Feed;
