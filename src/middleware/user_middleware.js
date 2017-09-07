import {
  CREATE_USER,
  SAVE_USERS,
  REQUEST_USERS,
} from '../actions/user_actions';

import {
  createUser,
  saveUsers,
  fetchUsers,
} from '../util/user_api_util';

const UserMiddleware = ({ getState, dispatch }) => next => action => {
  // if (action.type === CREATE_USER || action.type === SAVE_USERS || action.type === REQUEST_USERS) {
  //   debugger;
  // }

  switch(action.type) {
    case CREATE_USER:
      createUser(action.newUser, action.users);
      return next(action);

    case SAVE_USERS:
      saveUsers(action.users, dispatch);
      return next(action);

    case REQUEST_USERS:
      fetchUsers(dispatch);
      return next(action);

    default:
      return next(action);
  }
};

export default UserMiddleware;
