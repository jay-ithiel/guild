import merge from 'lodash/merge';
import {
  RECEIVE_USERS,
} from '../actions/user_actions';

const _defaultState = {
  index: {},
};

const UserReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_USERS:
      newState.index = action.users;
      return newState;

    default:
      return oldState;
  }
}

export default UserReducer;
