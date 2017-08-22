import { getFile, putFile } from 'blockstack';
import Tag from '../models/tag.js';
import { receiveTags } from '../actions/tag_actions';
import {
  receiveBlogs
} from '../actions/blog_actions';

var STORAGE_FILE = 'tags.json';

export const saveTags = ({ blogTags, existingTags, success, error }) => {
  let tagKeys = Object.keys(blogTags);
  let lastTagId = Object.keys(existingTags).length - 1;
  let tag, tagName, blogId;
  let popularTags, currentTagPopularityCount, leastPopularTag;

  for (let i = 0; i < tagKeys.length; i++) {
    tagName = tagKeys[i];
    blogId = blogTags[tagName].blogId;

    tag = existingTags[tagName];
    if (tag) {
      tag.blogs[blogId] = true;
    } else {
      tag = new Tag({
        id: lastTagId + 1,
        name: tagName,
        blogs: { [blogId]: true }
      });

      existingTags[tag.name] = tag;
    }

    popularTags = existingTags['popularTags'];
    currentTagPopularityCount = Object.keys(tag.blogs).length;

    if (popularTags) {
      if (Object.keys(popularTags).length >= 5 && !popularTags[tagName]) {
        leastPopularTag = _findLeastPopularTag(popularTags);

        if (leastPopularTag.leastPopularTagCount < currentTagPopularityCount) {
          delete popularTags[leastPopularTag.leastPopularTagName];
          popularTags[tag.name] = currentTagPopularityCount;
        }
      }
      else {
        popularTags[tag.name] = currentTagPopularityCount;
      }
    } else {
      popularTags = { [tag.name]: currentTagPopularityCount };
      existingTags['popularTags'] = popularTags;
    }
  }

  putFile(STORAGE_FILE, JSON.stringify(existingTags)).then(isTagSaved => {
    isTagSaved ? success(existingTags) : error();
  });
};

export const fetchTags = (success, error) => {
  var tags = {};

  getFile(STORAGE_FILE).then(tagItems => { // eslint-disable-line
    tagItems = JSON.parse(tagItems || '[]');

    Object.keys(tagItems).forEach(tagId => {
      tags[tagId] = tagItems[tagId];
    });

    success(tags);
  });
};

// const _updatePopularTags = ({ popularTags, currentTag }) => {
//
// };

const _findLeastPopularTag = popularTags => {
  let leastPopularTagName, leastPopularTagCount, currentTagPopularityCount;

  Object.keys(popularTags).forEach(popularTagName => {
    currentTagPopularityCount = popularTags[popularTagName];

    if (!leastPopularTagCount || currentTagPopularityCount < leastPopularTagCount) {
      leastPopularTagCount = currentTagPopularityCount;
      leastPopularTagName = popularTagName;
    }
  });

  return {
    leastPopularTagName,
    leastPopularTagCount
  };
};
