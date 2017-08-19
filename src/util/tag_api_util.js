import { getFile, putFile, loadUserData } from 'blockstack';

import { receiveTags } from '../actions/tag_actions';

import {
  receiveBlogs
} from '../actions/blog_actions';

var STORAGE_FILE = 'tags.json';

export const saveTags = (tags, success, error) => {
  debugger;
  putFile(STORAGE_FILE, JSON.stringify(tags)).then(isTagSaved => {
    // handle success
    debugger;
    isTagSaved ? success(tags) : error();
  });
};

export const fetchTags = (success, error) => {
  var tags = {};

  debugger;

  getFile(STORAGE_FILE).then(tagItems => { // eslint-disable-line
    tagItems = JSON.parse(tagItems || '[]');

    Object.keys(tagItems).forEach(tagId => {
      tags[tagId] = tagItems[tagId];
    });

    debugger;

    // dispatch(receiveTags(tags));
  });
};
