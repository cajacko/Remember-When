// @flow

import { getValidPostProps } from './utils';

export const set = post => ({
  mutation: `
    mutation SetPost($id:PostID, $content: String, $date:Date, $dateCreated:Date, $dateLastModified: Date) {
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
