import merge from 'lodash/merge';
import {
  RECEIVE_USERS,
} from '../actions/user_actions';
import { loadUserData } from 'blockstack';

const _defaultState = {
  index: {},
  currentUser: null
};

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  
  switch(action.type) {
    case RECEIVE_USERS:
      newState.index = action.users;
      newState.currentUser = action.users[loadUserData().username];
      return newState;

    default:
      return oldState;
  }
};

export default UserReducer;
