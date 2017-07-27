import React from 'react';
var Loader = require('react-loaders').Loader;

const SubmitBlogButton = ({ actionType, isActive }) => {
  return isActive ? (
    <button id='blog-submit' className='btn skinny'>
      {actionType} Blog
    </button>
  ) : (
    <button id='blog-submit' className='btn skinny inactive blog-submit-inactive'>
      <Loader type="ball-clip-rotate" active/>
    </button>
  )
};

export default SubmitBlogButton;
