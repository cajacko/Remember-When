// @flow

import React from 'react';
import CardsList from '@cajacko/lib/dist/components/Cards/List';
import CardsSectionHeader from '@cajacko/lib/dist/components/Cards/SectionHeader';
import { format } from '@cajacko/lib/dist/utils/dates';
import PostsListItem from '../ListItem';

const PostsList = ({ posts, baseRoute }) => (
  <CardsList
    cards={posts.toJS()}
    keyExtractor={({ id }) => id}
    renderItem={({ item }) => (
      <PostsListItem {...item} baseRoute={baseRoute} />
      )}
    renderSectionHeader={({ section: { date } }) => (
      <CardsSectionHeader title={format('monthYear', date)} />
      )}
  />
);

export default PostsList;
