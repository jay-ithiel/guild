import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
// import registerServiceWorker from './util/registerServiceWorker';
import configureStore from './store/store';
import {
  isSignInPending,
  isUserSignedIn,
  loadUserData,
  handlePendingSignIn
} from 'blockstack';

import { createSessionOrUser } from './util/user_api_util';
require('./env.js');

const cloudinary = window.cloudinary; // eslint-disable-line
global.cloudinary = cloudinary;

document.addEventListener('DOMContentLoaded', event => {
  let store = configureStore();

  if (isUserSignedIn()) {
    createSessionOrUser(loadUserData(), store.dispatch);
  } else if (isSignInPending()) {
    handlePendingSignIn().then(userData => {
      window.location = window.location.origin;
    });
  }

  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  // registerServiceWorker();

  global.store = store;
});
