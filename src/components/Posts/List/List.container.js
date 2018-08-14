// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import { createSelector } from 'reselect';
import PostsList from './List.render';

const mapToListSelector = (reducerKey, propKey, keyProp, sort) =>
  createSelector(
    state => state[reducerKey],
    (items) => {
      const list = items.toList();
      const sortedList = sort ? list.sort(sort) : list;

      const keyedList = keyProp
        ? sortedList.map(item => item.set('key', item.get(keyProp)))
        : sortedList;

      return {
        [propKey]: keyedList.toJS(),
      };
    }
  );

const sortByDates = (dateProps, reverse) => (a, b) => {
  const sortBy = (i = 0, prev = 0) => {
    const prop = dateProps[i];

    if (!prop) return prev;

    const dateA = new Date(a.get(prop));
    const dateB = new Date(b.get(prop));

    const diff = reverse ? dateA - dateB : dateB - dateA;

    if (diff === 0) return sortBy(i + 1, diff);

    return diff;
  };

  return sortBy();
};

const orderedPostsSelector = mapToListSelector(
  'posts',
  'posts',
  'id',
  sortByDates(['date', 'dateCreated'])
);

export const mapStateToProps = orderedPostsSelector;

export default connect(mapStateToProps)(PostsList);
