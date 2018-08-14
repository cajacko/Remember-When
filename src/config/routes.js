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
    path: '/new-post',
    exact: true,
    component: Scenes.ScenePost,
  },
  {
    path: '/home/post/:id',
    exact: true,
    component: Scenes.ScenePost,
  },
];
