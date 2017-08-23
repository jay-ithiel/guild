import {
  redirectToSignIn,
  signUserOut
} from 'blockstack';

export const signin = () => {
  redirectToSignIn();
};

export const signout = () => {
  signUserOut(window.location.origin);
};
