import React from 'react';
import { parseDateTime } from '../../util/helper_methods';

import AboutBlogAuthor from '../blogs/blog_link/about_blog_author';

const FeedBlog = blog => {
  blog = {
    authorId: 'Author Name',
    authorImageUrl: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png',
    updatedAt: `${new Date()}`
  };

  return (
    <div id='feed-blog'>
      <div id='feed-blog-img'>

      </div>

      <div id='feed-blog-info'>
        <h3 id='feed-blog-title'>Blog Title</h3>

        <p id='feed-blog-intro'>Blog Body Intro Hello World</p>

        <div id='feed-blog-about-author'>
          <AboutBlogAuthor
            authorId={ blog.authorId }
            authorImageUrl={ blog.authorImageUrl }
            date={ parseDateTime(blog.updatedAt) }
          />
        </div>
      </div>
    </div>
  );
};

export default FeedBlog;
