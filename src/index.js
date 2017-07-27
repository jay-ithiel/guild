import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import registerServiceWorker from './util/registerServiceWorker';
import configureStore from './store/store';
import { receiveCurrentUser } from './actions/session_actions';
import {
    isSignInPending,
    isUserSignedIn,
    loadUserData,
    handlePendingSignIn
} from 'blockstack';
require('./env.js');

const $ = window.$;
const cloudinary = window.cloudinary; // eslint-disable-line
global.cloudinary = cloudinary;


document.addEventListener('DOMContentLoaded', event => {
    window.cloudinary_options = {
        cloud_name: 'ddgtwtbre',
        upload_preset: 'k7gkxhh0'
    };

    let store = configureStore();

    if (isUserSignedIn()) {
        store.dispatch(receiveCurrentUser( loadUserData() ));
    } else if (isSignInPending()) {
        handlePendingSignIn().then(userData => {
            window.location = window.location.origin;
        });
    }

    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
    registerServiceWorker();
});
