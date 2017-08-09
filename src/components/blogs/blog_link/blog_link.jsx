import React from 'react';
import { Link } from 'react-router-dom';
import { parseDateTime, characterLimit } from '../../../util/helper_methods.js';

import BlogLinkActions from './blog_link_actions';
import AboutBlog from './about_blog';

const BlogLink = ({ blog, isUserBlogs }) => (
  <section id='blog-link' className='position-relative' >
    <Link className='blog-link-info position-relative' to={`/blogs/show/${blog.id}`}>
      <AboutBlog authorId={ blog.authorId }
        authorImageUrl={ blog.authorImageUrl }
        date={ parseDateTime(blog.updatedAt) }
      />

      {
        blog.imageUrl.length === 0 ? <div></div> : (
          <div className='blog-link-img-box'
            style={{ backgroundImage: `url(${blog.imageUrl})` }}>
          </div>
        )
      }

      <h4 id='blog-link-title'>{ blog.title }</h4>

      <div id='blog-link-body-intro'>
        {/* blog.body is not a string anymore, but an object so it won't display */}
        {/* blog.blogIntro ? blog.blogIntro : characterLimit(blog.body) */}
        { blog.blogIntro }...
      </div>

      {
        isUserBlogs ? <div></div> : (
          <span className='skinny small letter-space-1 grey dark-hover transition-2s-ease-in'>
            Read more...
          </span>
        )
      }
    </Link>

    <BlogLinkActions blog={ blog } isUserBlogs={ isUserBlogs }/>
  </section>
);

export default BlogLink;
