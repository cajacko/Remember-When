// @flow

import React from 'react';
import CardsList from '@cajacko/lib/dist/components/Cards/List';

const PostsList = ({ itemAction, posts }) => (
  <CardsList itemAction={itemAction} cards={posts} withDate />
);

export default PostsList;
