export const SAVE_TAGS = 'SAVE_TAGS';
export const saveTags = ({ blogTags, existingTags }) => ({
  type: SAVE_TAGS,
  blogTags,
  existingTags
});

export const REQUEST_TAGS = 'REQUEST_TAGS';
export const requestTags = () => ({
  type: REQUEST_TAGS
});

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});

export const RECEIVE_TAG_ERRORS = 'RECEIVE_TAG_ERRORS';
export const receiveTagErrors = errors => ({
  type: RECEIVE_TAG_ERRORS,
  errors
});
