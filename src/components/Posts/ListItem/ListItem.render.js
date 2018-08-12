// @flow

import React from 'react';
import CardsListItem from '@cajacko/lib/dist/components/Cards/ListItem';

/**
 * Render the markup for the posts list item
 *
 * @param {Object} props The props passed to the component, check flow for more detail
 *
 * @return {ReactElement} The components markup to render
 */
const PostsListItem = ({
  action, date, content, noItem,
}) =>
  (noItem ? null : (
    <CardsListItem withDate action={action} date={date} text={content} />
  ));

export default PostsListItem;
