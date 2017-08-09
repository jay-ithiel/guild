import React from 'react';
var Loader = require('react-loaders').Loader;

const SubmitCommentButton = ({ actionType, isActive }) => {
  return isActive ? (
    <button id='submit-comment-btn' className='btn skinny'>
      <p className='center'>{actionType} Comment</p>
    </button>
  ) : (
    <button id='submit-comment-btn' className='btn skinny inactive blog-submit-inactive'>
      <p><Loader className='center' type="ball-clip-rotate" active/></p>
    </button>
  )
};

export default SubmitCommentButton;
