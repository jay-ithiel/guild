import { getFile, putFile } from 'blockstack';
import {
  receiveUsers,
} from '../actions/user_actions';
import User from '../models/user.js';
window.User = User;
global.getFile = getFile;
global.putFile = putFile;

var STORAGE_FILE = 'users.json';

export const createUser = ({ userData, users, dispatch }) => {
  let user = new User({
    username: userData.username,
    firstName: userData.profile.givenName,
    lastName: userData.profile.familyName,
    imageUrl: userData.profile.image[0].contentUrl,
    description: userData.profile.description,
  });

  users[user.username] = user;

  putFile(STORAGE_FILE, JSON.stringify(users)).then(isSaveSuccessful => {
    // handle success
    fetchUsers(dispatch);
  });
};

export const saveUsers = (users, dispatch) => {
  putFile(STORAGE_FILE, JSON.stringify(users)).then(isSaveSuccessful => {
    // handle success
  });
};

export const fetchUsers = dispatch => {
  var users = {};

  getFile(STORAGE_FILE).then(userItems => {
    userItems = JSON.parse(userItems || '[]');

    Object.keys(userItems).forEach(username => {
      users[username] = userItems[username];
    });

    dispatch(receiveUsers(users));
  });
}

export const handleNewSession = (userData, dispatch) => {
  let doesUserExist = false;

  getFile(STORAGE_FILE).then(users => {
    users = JSON.parse(users || '[]');

    Object.keys(users).forEach(username => {
      if (username === userData.username) doesUserExist = true;
    });

    doesUserExist ? fetchUsers(dispatch) : createUser({ userData, users, dispatch });
    // if (doesUserExist) {
    //   fetchUsers(dispatch);
    // } else {
    //   createUser({ userData, users, dispatch });
    // }
  });
};
