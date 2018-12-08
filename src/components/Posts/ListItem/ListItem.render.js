// @flow

import React, { Fragment } from 'react';
import CardsListItem from '@cajacko/lib/components/Cards/ListItem';
import Text from '@cajacko/lib/components/Cards/ListItem/Text';
import CardsListDate from '@cajacko/lib/components/Cards/ListItem/Date';

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
  <CardsListItem action={action}>
    {({ spacing }) => (
      <Fragment>
        <Text
          text={{ _textFromConst: content }}
          innerStyles={{ paddingLeft: spacing }}
        />
        <CardsListDate date={date} />
      </Fragment>
    )}
  </CardsListItem>
);

export default PostsListItem;
