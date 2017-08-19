import {
  SAVE_TAGS,
  REQUEST_TAGS,
  receiveTags,
  receiveTagErrors,
} from '../actions/tag_actions';

import {
  saveTags,
  fetchTags
} from '../util/tag_api_util';

const TagMiddleware = ({ getState, dispatch }) => next => action => {
  const tagsSaveSuccess = tags => dispatch(receiveTags(tags));
  const tagsSaveError = errors => dispatch(receiveTagErrors(errors));

  if (action.type === SAVE_TAGS) {
    debugger;
  }
  if (action.type === REQUEST_TAGS) {
    debugger;
  }

  switch(action.type) {
    case SAVE_TAGS:
      saveTags(action.tags, tagsSaveSuccess, tagsSaveError);
      return next(action);

    case REQUEST_TAGS:
      fetchTags(tagsSaveSuccess, tagsSaveError);
      return next(action);

    default:
      return next(action);
  }
};

export default TagMiddleware;
