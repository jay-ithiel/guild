export const SAVE_USERS = 'SAVE_USERS';
export const saveUsers = users => ({
  type: SAVE_USERS,
  users
});

export const CREATE_USER = 'CREATE_USER';
export const createUser = (newUser, users) => ({
  type: CREATE_USER,
  newUser,
  users
});

export const REQUEST_USER = id => ({
  type: REQUEST_USER,
  id
});

export const REQUEST_USERS = 'REQUEST_USERS';
export const requestUsers = () => ({
  type: REQUEST_USERS
});

export const RECEIVE_USER = 'RECEIVE_USER';
export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});
