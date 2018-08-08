// @flow

import React from 'react';
import CJContentWithTabNav from '@cajacko/lib/dist/components/Layout/ContentWithTabNav';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import mapTabNavItemsWithPush from '@cajacko/lib/dist/utils/mapTabNavItemsWithPush';
import isTabNavItemActive from '../../../utils/conditionals/isTabNavItemActive';
import tabNavItems from '../../../config/tabNavItems';

const ContentWithTabNav = ({ children, location, history: { push } }) => (
  <CJContentWithTabNav
    tabNav={{
      isActive: isTabNavItemActive(location),
      items: mapTabNavItemsWithPush(tabNavItems, push),
    }}
  >
    {children}
  </CJContentWithTabNav>
);

export default withRouter(ContentWithTabNav);
