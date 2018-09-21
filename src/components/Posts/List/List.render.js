// @flow

import React from 'react';
import CardsList from '@cajacko/lib/components/Cards/List';
import CardsSectionHeader from '@cajacko/lib/components/Cards/SectionHeader';
import { format } from '@cajacko/lib/utils/dates';
import PostsListItem from '../ListItem';
import type { ImmutablePosts } from '../../../types/Post';

type Props = {
  posts: ImmutablePosts,
  baseRoute: string,
};

/**
 * Render a list of posts
 *
 * @return {ReactElement} The markup to render
 */
const PostsList = ({ posts, baseRoute }: Props) => (
  <CardsList
    cards={posts.toJS()}
    keyExtractor={({ id }) => id}
    renderItem={({ item }) => <PostsListItem {...item} baseRoute={baseRoute} />}
    renderSectionHeader={({ section: { date } }) => (
      <CardsSectionHeader
        title={{ _textFromConst: format('monthYear', date) }}
      />
    )}
  />
);

export default PostsList;
