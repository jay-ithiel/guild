import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
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

document.addEventListener('DOMContentLoaded', event => {
    window.cloudinary_options = {
        cloud_name: process.env['CLOUD_NAME'],
        upload_preset: process.env['UPLOAD_PRESET']
    };

    let store = configureStore();

    if (isUserSignedIn()) {
        store.dispatch(receiveCurrentUser( loadUserData() ));
    } else if (isSignInPending()) {
        handlePendingSignIn(userData => {
            window.location = window.location.origin;
        });
    }

    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
    registerServiceWorker();
});
