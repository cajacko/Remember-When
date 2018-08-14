// @flow

import createReducer from '@cajacko/lib/dist/utils/createReducer';
import { fromJS, Map } from 'immutable';
import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION, DELETE_POST_ACTION } from './actions';

const initialState = fromJS(defaultState);

const getPostDatePropByID = (state, id, prop = 'date') => {
  const timestamp = state.getIn(['postsByID', id, prop]);

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
      newState.get('list').sort((a, b) => {
        const diff =
          getPostDatePropByID(newState, a) - getPostDatePropByID(newState, b);

        if (diff === 0) {
          return (
            getPostDatePropByID(newState, a, 'dateCreated') -
            getPostDatePropByID(newState, b, 'dateCreated')
          );
        }

        return diff;
      })
    );

    return newState;
  },
  [DELETE_POST_ACTION]: (state, { id }) =>
    state.set('list', state.get('list').filter(postId => postId !== id)),
});
