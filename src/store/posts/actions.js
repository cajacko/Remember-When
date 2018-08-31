// @flow

import makeActionCreator from '@cajacko/lib/utils/makeActionCreator';
import { ensureDate } from '@cajacko/lib/utils/dates';
import store from '@cajacko/lib/utils/store';
import uuid from '@cajacko/lib/utils/uuid';
import api from '../../utils/api';

export const SAVE_POST_ACTION = 'SAVE_POST';
export const DELETE_POST_ACTION = 'DELETE_POST';
export const MARK_POST_AS_ONLINE = 'MARK_POST_AS_ONLINE';

export const deletePost = makeActionCreator(DELETE_POST_ACTION, 'id');

export const markPostAsOnline = makeActionCreator(MARK_POST_AS_ONLINE, 'id');

export const savePost = makeActionCreator(
  SAVE_POST_ACTION,
  (id, content, date) => {
    const now = new Date().getTime();

    const post = {
      id: id || uuid(),
      content,
      date: ensureDate(date).getTime(),
      dateCreated: id ? null : now,
      dateLastModified: now,
    };

    api.savePost(post).then(() => store().dispatch(markPostAsOnline(post.id)));

    return post;
  }
);
