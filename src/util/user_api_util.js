import { getFile, putFile } from 'blockstack';
import {
  receiveUsers,
} from '../actions/user_actions';
import User from '../models/user.js';
window.User = User;

var STORAGE_FILE = 'users.json';

export const createUser = (newUser, users) => {
  let user = new User(newUser);
  users[user.username] = user;

  putFile(STORAGE_FILE, JSON.stringify(users)).then(isSaveSuccessful => {
    // handle success
  })
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
