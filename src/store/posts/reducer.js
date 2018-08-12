// @flow

import addItemToMapAndList from '@cajacko/lib/dist/utils/immutable/addItemToMapAndList';
import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION } from './actions';

const postsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SAVE_POST_ACTION: {
      const { id, content, date } = payload;

      return addItemToMapAndList(
        id,
        { id, content, date },
        state,
        'postsByID',
        'list'
      );
    }

    default:
      return state;
  }
};

export default postsReducer;
