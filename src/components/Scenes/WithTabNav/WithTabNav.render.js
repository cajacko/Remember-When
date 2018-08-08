// @flow

import React from 'react';
import Router from '@cajacko/lib/dist/components/Router';
import { WITHIN_TAB } from '../../../config/routes';
import ContentWithTabNav from '../../Layout/ContentWithTabNav';

const SceneWithTabNav = () => (
  <ContentWithTabNav>
    <Router routes={WITHIN_TAB} />
  </ContentWithTabNav>
);

export default SceneWithTabNav;
