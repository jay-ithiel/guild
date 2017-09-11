import merge from 'lodash/merge';
import {
  RECEIVE_TAGS,
  RECEIVE_TAG_ERRORS,
} from '../actions/tag_actions';

const _defaultState = {
  index: {},
  popularTags: {} ,
  errors: []
};

const TagReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);

  if (action.type === RECEIVE_TAGS) {
    console.log('Tag Reducer receiving tags. action.tags:');
    console.dir(action.tags);
  }

  switch(action.type) {
    case RECEIVE_TAGS:
      newState.index = action.tags;
      newState.popularTags = Object.keys(action.tags['popularTags']);
      newState.errors = [];
      return newState;

    case RECEIVE_TAG_ERRORS:
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default TagReducer;
