// @flow

import React from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import Single from './Single.component';
import { content, date } from './__mocks__/content';
import isPostInEditMode from '../../../utils/conditionals/isPostInEditMode';

const SingleContainer = ({ location: { pathname } }) => (
  <Single
    content={content}
    date={date}
    isInEditMode={isPostInEditMode(pathname)}
  />
);

export default withRouter(SingleContainer);
