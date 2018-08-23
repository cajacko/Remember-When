// @flow

import createReducer from '@cajacko/lib/dist/utils/createReducer';
import setNewOrUpdateMap from '@cajacko/lib/dist/utils/immutable/setNewOrUpdateMap';
import { fromJS } from 'immutable';
import defaultState from './__mocks__/posts';
import {
  SAVE_POST_ACTION,
  DELETE_POST_ACTION,
  MARK_POST_AS_ONLINE,
} from './actions';
import PostRecord from '../../types/PostRecord';

const initialState = fromJS(defaultState);

export default createReducer(initialState, {
  [SAVE_POST_ACTION]: (
    state,
    {
      id, content, date, dateLastModified, dateCreated,
    }
  ) =>
    setNewOrUpdateMap(
      state,
      id,
      dateCreated,
      dateLastModified,
      {
        id,
        content,
        date,
        isOnline: false,
      },
      PostRecord
    ),
  [DELETE_POST_ACTION]: (state, { id }) => state.delete(id),
  [MARK_POST_AS_ONLINE]: (state, { id }) =>
    state.updateIn([id, 'isOnline'], true),
});
