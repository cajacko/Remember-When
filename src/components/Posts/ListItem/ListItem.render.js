// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';

type Props = {
  action: () => void,
  date: Date,
  content: string,
};

/**
 * Render the markup for the posts list item
 *
 * @param {Object} props The props passed to the component, check flow for more
 * detail
 *
 * @return {ReactElement} The components markup to render
 */
const PostsListItem = ({ action, date, content }: Props) => (
  <CardsListItem
    withDate
    action={action}
    date={date}
    text={{ _textFromConst: content }}
  />
);

export default PostsListItem;
