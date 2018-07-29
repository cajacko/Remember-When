// @flow

import React from 'react';
import CardsList from '@cajacko/lib/dist/components/Cards/List';
import posts from './__mocks__/posts';

const PostsList = ({ itemAction }) => (
  <CardsList itemAction={itemAction} cards={posts} withDate />
);

export default PostsList;
