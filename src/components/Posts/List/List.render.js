// @flow

import React from 'react';
import CardsList from '@cajacko/lib/dist/components/Cards/List';
import PostsListItem from '../ListItem';

const PostsList = ({ posts }) => (
  <CardsList
    cards={posts}
    renderItem={({ item: { id } }) => <PostsListItem id={id} />}
  />
);

export default PostsList;
