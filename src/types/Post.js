// @flow

import { Record } from 'immutable';
// import type { RecordFactory, RecordOf } from 'immutable';

export type PostID = string;
export type PostContent = string;

export type Post = {
  id: PostID,
  content: PostContent,
  date: Date,
  dateCreated: Date,
  dateLastModified: Date,
};

export type DBPost = Post & {};

export type ImmutablePosts = {
  toJS: () => Array<Post>,
};

// type PostPropsType = {
//   id: ?string,
//   content: string,
//   date: ?number,
//   dateCreated: ?number,
//   dateLastModified: ?number,
// };

// const Post: RecordFactory<PostPropsType> = Record({
export const PostRecord = Record({
  id: null,
  content: '',
  date: null,
  dateCreated: null,
  dateLastModified: null,
});

// export type PostType = RecordOf<PostPropsType>;
