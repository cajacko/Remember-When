// @flow

import makeActionCreator from '@cajacko/lib/dist/utils/makeActionCreator';
import { ensureDate } from '@cajacko/lib/dist/utils/dates';
import uuid from '@cajacko/lib/dist/utils/uuid';

export const SAVE_POST_ACTION = 'SAVE_POST';
export const DELETE_POST_ACTION = 'DELETE_POST';

export const savePost = makeActionCreator(
  SAVE_POST_ACTION,
  (id, content, date) => {
    const now = new Date().getTime();

    return {
      id: id || uuid(),
      content,
      date: ensureDate(date).getTime(),
      dateCreated: id ? null : now,
      dateLastModified: now,
    };
  }
);

export const deletePost = makeActionCreator(DELETE_POST_ACTION, 'id');
