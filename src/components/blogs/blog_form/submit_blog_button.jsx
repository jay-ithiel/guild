import React from 'react';
var Loader = require('react-loaders').Loader;

const SubmitBlogButton = ({ handleSubmit, actionType, isActive }) => {
  return isActive ? (
    <button id='blog-submit' className='btn skinny' onClick={handleSubmit}>
      <p className='center'>{actionType} Blog</p>
    </button>
  ) : (
    <button id='blog-submit' className='btn skinny inactive blog-submit-inactive'>
      <p><Loader className='center' type="ball-clip-rotate" active/></p>
    </button>
  )
};

export default SubmitBlogButton;
