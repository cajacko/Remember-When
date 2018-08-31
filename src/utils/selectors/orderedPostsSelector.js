// @flow

import mapToListSelector from '@cajacko/lib/utils/selectors/mapToListSelector';
import sortByDates from '@cajacko/lib/utils/immutable/sortByDates';

const orderedPostsSelector = mapToListSelector(
  'posts',
  'posts',
  sortByDates(['date', 'dateCreated'])
);

export default orderedPostsSelector;
