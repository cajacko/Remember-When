// @flow

import createReducer from '@cajacko/lib/dist/utils/createReducer';
import { fromJS, Map } from 'immutable';
import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION, DELETE_POST_ACTION } from './actions';

const initialState = fromJS(defaultState);

export default createReducer(initialState, {
  [SAVE_POST_ACTION]: (state, {
    id, content, date, isNewPost,
  }) => {
    let newState = state;

    if (isNewPost) {
      newState = newState.set('list', newState.get('list').unshift(id));
    }

    return newState.setIn(['postsByID', id], Map({ id, content, date }));
  },
  [DELETE_POST_ACTION]: (state, { id }) =>
    state.set('list', state.get('list').filter(postId => postId !== id)),
});
