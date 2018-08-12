// @flow

import defaultState from './__mocks__/posts';
import { SAVE_POST_ACTION } from './actions';

const postsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SAVE_POST_ACTION: {
      const { id, content, date } = payload;
      const newState = Object.assign({}, state);

      const list = newState.list.slice();

      list.unshift(id);

      newState.list = list;

      newState.postsByID[id] = {
        id,
        content,
        date,
      };

      return newState;
    }

    default:
      return state;
  }
};

export default postsReducer;
