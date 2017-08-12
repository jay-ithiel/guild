export const SIGNIN = 'SIGNIN';
export const signin = () => ({
  type: SIGNIN
});

export const SIGNOUT = 'SIGNOUT';
export const signout = () => ({
  type: SIGNOUT
});

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
