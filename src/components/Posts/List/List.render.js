// @flow

import React from 'react';
import CardsList from '@cajacko/lib/dist/components/Cards/List';
import PostsListItem from '../ListItem';

const PostsList = ({ posts, baseRoute }) => (
  <CardsList
    cards={posts}
    renderItem={({ item: { id } }) => (
      <PostsListItem id={id} baseRoute={baseRoute} />
    )}
    sectionItem={date => <CardsSectionHeader title={date} />}
    sectionAt={(a, b) => {
      if (!a) return b.date;

      if (
        a.date.getMonth() !== b.date.getMonth() &&
        a.date.getFullYear() !== b.date.getFullYear()
      ) {
        return b.date();
      }

      return null;
    }}
  />
);

export default PostsList;
