// @flow

import { HOME, PLUS } from '@cajacko/lib/config/icons';

export default [
  {
    key: '1',
    text: 'TabNav.Home',
    label: 'Home',
    icon: HOME,
    route: '/',
  },
  {
    key: '2',
    text: 'TabNav.Add',
    label: 'Add',
    icon: PLUS,
    route: '/new-post',
  },
];
