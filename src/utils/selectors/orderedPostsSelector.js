// @flow

import mapToListSelector from '@cajacko/lib/dist/utils/selectors/mapToListSelector';
import sortByDates from '@cajacko/lib/dist/utils/immutable/sortByDates';

const orderedPostsSelector = mapToListSelector(
  'posts',
  'posts',
  sortByDates(['date', 'dateCreated'])
);

export default orderedPostsSelector;
