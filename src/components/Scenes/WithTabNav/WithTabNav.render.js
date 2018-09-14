// @flow

import React from 'react';
import Router from '@cajacko/lib/components/Router';
import { WITHIN_TAB } from '../../../config/routes';
import ContentWithTabNav from '../../Layout/ContentWithTabNav';

/**
 * Render a router within the tab nav
 *
 * @return {ReactElement} Markup to render
 */
const SceneWithTabNav = () => (
  <ContentWithTabNav>
    <Router routes={WITHIN_TAB} />
  </ContentWithTabNav>
);

export default SceneWithTabNav;
