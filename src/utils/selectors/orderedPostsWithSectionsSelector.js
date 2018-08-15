// @flow

import { createSelector } from 'reselect';
import sectionListByMonth from '@cajacko/lib/dist/utils/sectionListByMonth';
import orderedPostsSelector from './orderedPostsSelector';

const orderedPostsWithSectionsSelector = createSelector(
  orderedPostsSelector,
  ({ posts }) => ({ posts: sectionListByMonth(posts) })
);

export default orderedPostsWithSectionsSelector;
