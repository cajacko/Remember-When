// @flow

import React from 'react';
import CJContentWithTabNav from '@cajacko/lib/dist/components/Layout/ContentWithTabNav';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { HOME, PLUS } from '@cajacko/lib/dist/config/icons';

const ContentWithTabNav = ({ children, history: { push } }) => (
  <CJContentWithTabNav
    tabNav={{
      isActive: ({ text }) => text === 'Home',
      items: [
        {
          key: '1',
          text: 'Home',
          icon: HOME,
          action: () => push('/'),
        },
        {
          key: '2',
          text: 'Add',
          icon: PLUS,
          action: () => push('/newPost'),
        },
      ],
    }}
  >
    {children}
  </CJContentWithTabNav>
);

export default withRouter(ContentWithTabNav);
