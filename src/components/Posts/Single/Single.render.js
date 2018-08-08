// @flow

import React from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import Text from '@cajacko/lib/dist/components/Text';
import HeaderWithContent from '@cajacko/lib/dist/components/Layout/HeaderWithContent';
import { format } from '@cajacko/lib/dist/utils/dates';

const PostsSingle = ({
  content, date, history: { goBack }, isInEditMode,
}) => (
  <HeaderWithContent
    header={{ back: goBack, title: format('date', new Date()) }}
  >
    <Text
      text={isInEditMode ? `Edit Mode - ${content}` : content}
      type="body1"
    />
  </HeaderWithContent>
);

export default withRouter(PostsSingle);
