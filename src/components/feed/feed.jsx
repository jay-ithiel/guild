import React from 'react';

import FeedBlog from './feed_blog';

class Feed extends React.Component {
  _mapFeedBlogLis() {
    return this.props.blogs.map((blog, index) => (
      <FeedBlog
        key={index}
        blog={blog}
      />
    ));
  }

  render() {
    let feedBlogLis = this._mapFeedBlogLis.bind(this)();

    return (
      <section id='feed'>
        <h4 id='feed-category'>
          <p id='feed-category-title'>{this.props.category}</p>
          <span className='small skinny letter-space-1 margin-left--10'>LATEST</span>
        </h4>

        <ul id='feed-blogs'>
          {feedBlogLis}
        </ul>
      </section>
    );
  }
}

export default Feed;
