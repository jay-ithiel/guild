export const SAVE_TAGS = 'SAVE_TAGS';
export const saveTags = tags => ({
  type: SAVE_TAGS,
  tags
});

export const REQUEST_TAGS = 'REQUEST_TAGS';
export const requestTags = () => ({
  type: REQUEST_TAGS
});

export const DELETE_TAG = 'DELETE_TAG';
export const deleteTag = id => ({
  type: DELETE_TAG,
  id
});

export const REMOVE_TAG = 'REMOVE_TAG';
export const removeTag = id => ({
  type: REMOVE_TAG,
  id
});

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const receiveTags = tags => ({
  type: RECEIVE_TAGS,
  tags
});
