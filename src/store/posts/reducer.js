// @flow

import createReducer from '@cajacko/lib/dist/utils/createReducer';
import { fromJS, Map } from 'immutable';
import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION, DELETE_POST_ACTION } from './actions';

const initialState = fromJS(defaultState);

const getPostDateByID = (state, id) => {
  const timestamp = state.getIn(['postsByID', id, 'date']);

  return new Date(timestamp);
};

export default createReducer(initialState, {
  [SAVE_POST_ACTION]: (
    state,
    {
      id, content, date, isNewPost, dateLastModified, dateCreated,
    }
  ) => {
    let newState = state;
    let post =
      newState.getIn(['postsByID', id]) ||
      Map({
        id,
        content,
        date,
        dateLastModified,
        dateCreated,
      });

    if (isNewPost) {
      newState = newState.set('list', newState.get('list').unshift(id));
    } else {
      post = post.merge({
        content,
        date,
        dateLastModified,
      });
    }

    newState = newState.setIn(['postsByID', id], post);

    newState = newState.set(
      'list',
      newState
        .get('list')
        .sort((a, b) =>
          (getPostDateByID(newState, a) < getPostDateByID(newState, b) ? 1 : -1))
    );

    return newState;
  },
  [DELETE_POST_ACTION]: (state, { id }) =>
    state.set('list', state.get('list').filter(postId => postId !== id)),
});
