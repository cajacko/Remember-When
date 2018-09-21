// @flow

import { getValidPostProps } from './utils';
import type { DB } from '../../types/General';
import type { DBPost, PostID } from '../../types/Post';

export const Query = {
  getPost: ({ id }: { id: PostID }, db: DB) => db.get(['posts', id]),
  posts: (vars: any, db: DB) =>
    db.get(['posts']).then(vals => Object.values(vals)),
};

export const Mutation = {
  setPost: ({ id, ...post }: DBPost, db: DB) =>
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
  deletePost: ({ id }: { id: PostID }, db: DB) =>
    db.delete(['posts', id]).then(() => id),
};
