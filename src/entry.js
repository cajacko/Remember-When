// @flow

import { ScenePost, SceneHome, SceneUnknown } from './components/Scenes';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    component: SceneHome,
  },
  {
    path: '/post/:id',
    exact: true,
    component: ScenePost,
  },
  {
    component: SceneUnknown,
  },
];
