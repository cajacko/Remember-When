// @flow

import generateID from '../../utils/generateID';

export const SAVE_POST_ACTION = 'SAVE_POST';

export const savePost = (id, content) => ({
  type: SAVE_POST_ACTION,
  payload: {
    id: id || generateID(),
    content,
    date: new Date(),
  },
});
