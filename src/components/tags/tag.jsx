import React from 'react';

const Tag = ({ tagName, removeTag }) => (
  <li id='tag'>
    <h4 id='tag-name'>{tagName}</h4>
    <span id='delete-tag' className='btn' onClick={removeTag(tagName)}>x</span>
  </li>
);

export default Tag;
