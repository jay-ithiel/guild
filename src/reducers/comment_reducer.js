import merge from 'lodash/merge';

const _defaultState = {
  index: {}
};

const CommentReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_COMMENTS:
      newState.index = action.comments;
      return newState;

    default:
      return oldState;
  }
}

export default CommentReducer;
