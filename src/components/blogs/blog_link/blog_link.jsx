import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { parseDateTime, characterLimit } from '../../../util/helper_methods.js';

import BlogLinkActions from './blog_link_actions';
import AboutBlogAuthor from './about_blog_author';
import BlogLikesForm from '../../likes/blog_likes_form';
import BlogBookmarkForm from '../bookmarks/blog_bookmark_form';

const BlogLink = ({ blog, isUserBlogs, currentUser }) => {
  return !currentUser ? <div></div> : (
    <section id='blog-link' className='position-relative' >
      <Link className='blog-link-info position-relative' to={`/blogs/show/${blog.id}`}>
        <AboutBlogAuthor
          authorId={ blog.authorId }
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
          { blog.blogIntro }
        </div>

        {
          isUserBlogs ? <div></div> : (
            <span className='skinny small letter-space-1 grey dark-hover margin-bottom--10 transition-2s-ease-in'>
              Read more...
            </span>
          )
        }
      </Link>

      <BlogLinkActions blog={ blog } isUserBlogs={ isUserBlogs }/>

      {
        !blog.likes ? <div></div> : (
          <BlogLikesForm
            blog={blog}
            doesUserLikeBlog={blog.likes[currentUser.username] ? true : false}
          />
        )
      }

      <BlogBookmarkForm blog={blog}/>
    </section>
  );
};

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps, null)(BlogLink);
