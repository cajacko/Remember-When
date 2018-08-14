// @flow

import { List, Map } from 'immutable';
import { createSelector } from 'reselect';
import orderedPostsSelector from './orderedPostsSelector';

const isNewMonth = (dateA, dateB) => {
  if (!dateA) return true;

  if (
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getFullYear() === dateB.getFullYear()
  ) {
    return false;
  }

  return true;
};

const orderedPostsWithSectionsSelector = createSelector(
  orderedPostsSelector,
  ({ posts }) => {
    let sections = List();
    let section;
    let prevDate;

    posts.forEach((post) => {
      const date = new Date(post.get('date'));

      if (isNewMonth(prevDate, date)) {
        if (section) {
          sections = sections.push(section);
        }

        section = Map({
          date,
          data: List(),
        });
      }

      section = section.set('data', section.get('data').push(post));

      prevDate = date;
    });

    if (section) {
      sections = sections.push(section);
    }

    return { posts: sections };
  }
);

export default orderedPostsWithSectionsSelector;
