import React from 'react';
import { Link } from 'react-router-dom';
import { parseDateTime } from '../../util/helper_methods';

import AboutBlogAuthor from '../blogs/blog_link/about_blog_author';

const FeedBlog = ({ blog }) => {
  return !blog ? <div></div> : (
    <Link id='feed-blog' to={`/blogs/show/${blog.id}`}>
      {
        blog.imageUrl.length === 0 ? <div></div> : (
          <div id='feed-blog-img'
            style={{ backgroundImage: `url(${blog.imageUrl})` }}>
          </div>
        )
      }

      <div id='feed-blog-info'>
        <h3 id='feed-blog-title'>{blog.title}</h3>

        <p id='feed-blog-intro'>{blog.blogIntro}</p>

        <div id='feed-blog-about-author'>
          <AboutBlogAuthor
            authorId={ blog.authorId }
            authorImageUrl={ blog.authorImageUrl }
            date={ parseDateTime(blog.updatedAt) }
          />
        </div>
      </div>
    </Link>
  );
};

export default FeedBlog;
