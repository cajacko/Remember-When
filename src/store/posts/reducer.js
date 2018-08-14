// @flow

import createReducer from '@cajacko/lib/dist/utils/createReducer';
import sortIDListByDates from '@cajacko/lib/dist/utils/immutable/sortIDListByDates';
import setNewOrUpdateMapAndList from '@cajacko/lib/dist/utils/immutable/setNewOrUpdateMapAndList';
import { fromJS } from 'immutable';
import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION, DELETE_POST_ACTION } from './actions';

const initialState = fromJS(defaultState);

export default createReducer(initialState, {
  [SAVE_POST_ACTION]: (
    state,
    {
      id, content, date, dateLastModified, dateCreated,
    }
  ) =>
    setNewOrUpdateMapAndList(
      state,
      ['list'],
      ['postsByID'],
      id,
      dateCreated,
      dateLastModified,
      {
        id,
        content,
        date,
      },
      (list, newState) =>
        sortIDListByDates(list, newState.get('postsByID'), [
          'date',
          'dateCreated',
        ])
    ),
  [DELETE_POST_ACTION]: (state, { id }) =>
    state.set('list', state.get('list').filter(postId => postId !== id)),
});
