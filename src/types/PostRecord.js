// @flow

import { Record } from 'immutable';
// import type { RecordFactory, RecordOf } from 'immutable';

// type PostPropsType = {
//   id: ?string,
//   content: string,
//   date: ?number,
//   dateCreated: ?number,
//   dateLastModified: ?number,
// };

// const Post: RecordFactory<PostPropsType> = Record({
const Post = Record({
  id: null,
  content: '',
  date: null,
  dateCreated: null,
  dateLastModified: null,
});

// export type PostType = RecordOf<PostPropsType>;

export default Post;
