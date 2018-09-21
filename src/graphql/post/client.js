// @flow

import { getValidPostProps } from './utils';
import type { DBPost, PostID } from '../../types/Post';

/**
 * Set the post object to the db
 *
 * @param {Object} post The post object
 *
 * @return {Object} The graphql config needed for the mutation
 */
export const set = (post: DBPost) => ({
  mutation: `
    mutation SetPost($id: PostID, $content: String, $date: Date, $dateCreated: Date, $dateLastModified: Date) {
      setPost(id: $id, content: $content, date: $date, dateCreated: $dateCreated, dateLastModified: $dateLastModified) {
        id
        content
        date
        dateCreated
        dateLastModified
      }
    }
  `,
  vars: getValidPostProps(post),
});

/**
 * Remove a post from the db
 *
 * @param {String} id the id of the post to remove
 *
 * @return {Object} The graphql config needed for the mutation
 */
export const remove = (id: PostID) => ({
  mutation: `
    mutation DeletePost($id: PostID) {
      deletePost(id: $id)
    }
  `,
  vars: { id },
});
