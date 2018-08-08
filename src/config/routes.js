// @flow

import * as Scenes from '../components/Scenes';

export const ENTRY = [
  {
    component: Scenes.SceneWithTabNav,
  },
];

export const WITHIN_TAB = [
  {
    path: '/',
    exact: true,
    component: Scenes.SceneHome,
  },
  {
    path: '/post/:id',
    exact: true,
    component: Scenes.ScenePost,
  },
  {
    component: Scenes.SceneUnknown,
  },
];
