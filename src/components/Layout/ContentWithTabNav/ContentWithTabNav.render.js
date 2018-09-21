// @flow

import * as React from 'react';
import CJContentWithTabNav from '@cajacko/lib/components/Layout/ContentWithTabNav';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import mapTabNavItemsWithPush from '@cajacko/lib/utils/mapTabNavItemsWithPush';
import tabNavItems from '../../../config/tabNavItems';
import matchActiveTabNav from '../../../config/matchActiveTabNav';
import type { ReactRouter } from '../../../types/General';

type Props = ReactRouter & {
  children: React.Node,
};

/**
 * Display content wrapped in a tab navigation
 *
 * @param {Object} props The props passed to the component
 *
 * @return {ReactElement} Markup to render
 */
const ContentWithTabNav = ({
  children,
  location: { pathname },
  history: { push },
}: Props) => (
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
