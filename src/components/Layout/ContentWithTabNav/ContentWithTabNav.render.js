// @flow

import React from 'react';
import CJContentWithTabNav from '@cajacko/lib/dist/components/Layout/ContentWithTabNav';
import withRouter from '@cajacko/lib/dist/components/HOCs/withRouter';
import mapTabNavItemsWithPush from '@cajacko/lib/dist/utils/mapTabNavItemsWithPush';
import tabNavItems from '../../../config/tabNavItems';
import matchActiveTabNav from '../../../config/matchActiveTabNav';

const ContentWithTabNav = ({
  children,
  location: { pathname },
  history: { push },
}) => (
  <CJContentWithTabNav
    tabNav={{
      currentRoute: pathname,
      matchActiveTabNav,
      items: mapTabNavItemsWithPush(tabNavItems, push),
    }}
  >
    {children}
  </CJContentWithTabNav>
);

export default withRouter(ContentWithTabNav);
