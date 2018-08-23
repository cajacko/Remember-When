// @flow

import { getValidPostProps } from './utils';

export const Query = {
  getPost: ({ id }, db) => db.get(['posts', id]),
};

export const Mutation = {
  setPost: ({ id, ...post }, db) =>
    db
      .set(['posts', id], getValidPostProps({ id, ...post }))
      .then(() => Query.getPost(id)),
};
