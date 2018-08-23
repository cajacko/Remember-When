// @flow

import { getValidPostProps } from './utils';

export const set = post => ({
  mutation: `
    mutation setPost($id: String, $content: String, date: Timestamp, dateCreated: Timestamp, dateLastModified: Timestamp) {
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
