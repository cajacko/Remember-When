// @flow

import createReducer from '@cajacko/lib/dist/utils/createReducer';
import setNewOrUpdateMap from '@cajacko/lib/dist/utils/immutable/setNewOrUpdateMap';
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
    setNewOrUpdateMap(state, id, dateCreated, dateLastModified, {
      id,
      content,
      date,
    }),
  [DELETE_POST_ACTION]: (state, { id }) => state.delete(id),
});
