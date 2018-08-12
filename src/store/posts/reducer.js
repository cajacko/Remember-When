// @flow

import addItemToMapAndList from '@cajacko/lib/dist/utils/immutable/addItemToMapAndList';
import createReducer from '@cajacko/lib/dist/utils/createReducer';
import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION } from './actions';

export default createReducer(defaultState, {
  [SAVE_POST_ACTION]: (state, {
    id, content, date, isNewPost,
  }) =>
    addItemToMapAndList({ id, content, date }, state, {
      idMapKey: 'postsByID',
      listKey: 'list',
      skipAddToList: !isNewPost,
    }),
});
