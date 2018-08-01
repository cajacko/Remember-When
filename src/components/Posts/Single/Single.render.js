// @flow

import React, { Fragment } from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import Text from '@cajacko/lib/dist/components/Text';
import Header from '@cajacko/lib/dist/components/Header';
import { format } from '@cajacko/lib/dist/utils/dates';

const PostsSingle = ({ content, date, history: { goBack } }) => (
  <Fragment>
    <Header back={goBack} title={format('date', new Date())} />
    <Text text={content} type="body1" />
  </Fragment>
);

export default withRouter(PostsSingle);
