// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import { createSelector } from 'reselect';
import PostsListItem from './ListItem.component';

export const mapStateToProps = (state, { id }) =>
  createSelector(
    ({ posts }) => posts.get('postsByID').get(id),
    post => (post ? post.toJS() : { noItem: true })
  )(state);

export default connect(mapStateToProps)(PostsListItem);
