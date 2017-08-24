import { getFile, putFile } from 'blockstack';
import {
  receiveUsers,
} from '../actions/user_actions';
import User from '../models/user.js';

var STORAGE_FILE = 'users.json';

export const createUser = ({ userData, users, dispatch }) => {
  let userImage;
  if (!userData.profile.image) {
    userImage = null;
  } else {
    userImage = userData.profile.image[0].contentUrl;
  }

  let user = new User({
    username: userData.username,
    firstName: userData.profile.givenName,
    lastName: userData.profile.familyName,
    imageUrl: userImage,
    description: userData.profile.description,
  });

  users[user.username] = user;

  debugger;
  putFile(STORAGE_FILE, JSON.stringify(users)).then(isSaveSuccessful => {
    fetchUsers(dispatch);
  });
};

export const saveUsers = (users, dispatch) => {
  debugger;
  putFile(STORAGE_FILE, JSON.stringify(users)).then(isSaveSuccessful => {
    fetchUsers(dispatch);
  });
};

export const fetchUsers = dispatch => {
  var users = {};
  debugger;

  getFile(STORAGE_FILE).then(userItems => {
    userItems = JSON.parse(userItems || '[]');

    Object.keys(userItems).forEach(username => {
      users[username] = userItems[username];
    });

    debugger;
    dispatch(receiveUsers(users));
  });
}

export const createSessionOrUser = (userData, dispatch) => {
  let doesUserExist = false;
  debugger;

  getFile(STORAGE_FILE).then(users => {
    users = JSON.parse(users || '[]');

    Object.keys(users).forEach(username => {
      if (username === userData.username) doesUserExist = true;
    });

    debugger;

    if (doesUserExist) {
      fetchUsers(dispatch);
    } else {
      createUser({ userData, users, dispatch });
    }
  });
};
