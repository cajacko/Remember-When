// @flow

import { getValidPostProps } from './utils';

export const Query = {
  getPost: ({ id }, db) => db.get(['posts', id]),
  posts: (vars, db) => db.get(['posts']).then(vals => Object.values(vals)),
};

export const Mutation = {
  setPost: ({ id, ...post }, db) =>
    Query.getPost({ id }, db)
      .catch(() => undefined)
      .then((existingItem) => {
        let item;

        if (existingItem) {
          item = Object.assign({}, existingItem, post);
        } else {
          item = Object.assign({}, post, {
            id,
            dateCreated: post.dateCreated || post.dateLastModified,
          });
        }

        return db
          .set(['posts', id], getValidPostProps(item))
          .then(() => Query.getPost({ id }, db));
      }),
  deletePost: ({ id }, db) => db.delete(['posts', id]).then(() => id),
};
