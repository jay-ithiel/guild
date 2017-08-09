import React from 'react';

const AboutBlog = ({ authorId, authorImageUrl='', date, blog }) => (
  <section id='about-blog'>
    <div id='about-blog-img'
      style={{ backgroundImage: `url(${authorImageUrl})` }}>
    </div>

    <div id='about-blog-info'>
      <span>{authorId}</span>
      <span>{date}</span>
    </div>
  </section>
);

export default AboutBlog;
