// @flow

import makeActionCreator from '@cajacko/lib/dist/utils/makeActionCreator';
import generateID from '../../utils/generateID';

export const SAVE_POST_ACTION = 'SAVE_POST';
export const DELETE_POST_ACTION = 'DELETE_POST';

export const savePost = (id, content, date) => ({
  type: SAVE_POST_ACTION,
  payload: {
    isNewPost: !id,
    id: id || generateID(),
    content,
    date,
  },
});

export const deletePost = makeActionCreator(DELETE_POST_ACTION, 'id');
