import {
  getFile,
  putFile,
  loadUserData,
} from 'blockstack';

import { isBlogAuthor, isBlogToDelete } from './helper_methods';

import User from '../models/user.js';
import Blog from '../models/blog.js';

import {
  receiveUsers,
} from '../actions/user_actions';

import {
  receiveBlogs,
  receiveUserBlogs
} from '../actions/blog_actions';

var GUILD_STORAGE_FILE = 'GUILD_STORAGE_FILE.json';
var USERS_INDEX = 1;
var BLOGS_INDEX = 1;
var TAGS_INDEX = 1;
var COMMENTS_INDEX = 1;
var LIKES_INDEX = 1;

export const saveData = (data, dispatch) => {
  putFile(GUILD_STORAGE_FILE, JSON.stringify(data)).then(isSaveSuccessful => {
    // handle save success
  });
};

export const fetchData = dispatch => {
  var data = {};

  getFile(GUILD_STORAGE_FILE).then(rawData => {
    rawData = JSON.parse(rawData || '[]');

    Object.keys(rawData).forEach(id => {
      data[id] = rawData[id]
    });

    dispatch(receiveData(data));
  });
};

export const createUser = ({ userData, data, dispatch }) => {
  let user = new User({
    username: userData.username,
    firstName: userData.profile.givenName,
    lastName: userData.profile.familyName,
    imageUrl: userData.profile.image[0].contentUrl,
    description: userData.profile.description,
  });

  data[user.username] = user;

  putFile(STORAGE_FILE, JSON.stringify(data)).then(isSaveSuccessful => {
    fetchData(dispatch);
  });
};

export const saveBlogs = (data, dispatch) => {
  putFile(GUILD_STORAGE_FILE, JSON.stringify(data)).then(isSaveSuccessful => {
    let user = loadUserData();
    if (isSaveSuccessful) { window.location = `/blogs/${user.username}`}
  });
}

export const saveComments = (data, blogId) => {
  putFile(GUILD_STORAGE_FILE, JSON.stringify(data)).then(isSaveSuccessful => {
    if (isSaveSuccessful) { window.location = `/blogs/show/${blogId}`}
  });
};

export const saveLikes = (data) => {
  putFile(GUILD_STORAGE_FILE, JSON.stringify(data)).then(isSaveSuccessful => {
    // if (isBlogSaved) { window.location = `/blogs/show/${blogId}`}
  });
};
