import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './util/registerServiceWorker';
import configureStore from './store/store';
import {
  isSignInPending,
  isUserSignedIn,
  loadUserData,
  handlePendingSignIn
} from 'blockstack';

import { createSessionOrUser } from './util/user_api_util';
import {
  saveUsers,
} from './actions/user_actions';
import {
  saveTags,
} from './actions/tag_actions';
import { saveBlogs } from './actions/blog_actions';

import * as blockstack from 'blockstack';
global.blockstack = blockstack;
require('./env.js');

const cloudinary = window.cloudinary; // eslint-disable-line
global.cloudinary = cloudinary;

document.addEventListener('DOMContentLoaded', event => {
  window.cloudinary_options = {
    cloud_name: 'ddgtwtbre',
    upload_preset: 'k7gkxhh0'
  };

  let store = configureStore();

  if (isUserSignedIn()) {
    createSessionOrUser(loadUserData(), store.dispatch);
  } else if (isSignInPending()) {
    handlePendingSignIn().then(userData => {
      window.location = window.location.origin;
    });
  }

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  registerServiceWorker();

  // DEVELOP ONLY!! REMOVE BEFORE PRODUCTION
  global.store = store;
  global.blockstack = blockstack;
  global.saveUsers = saveUsers;
  global.saveBlogs = saveBlogs;
  global.saveTags = saveTags;

});
