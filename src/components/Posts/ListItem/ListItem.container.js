// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import PostsListItem from './ListItem.component';

const mapStateToProps = ({ posts: { postsByID } }, { id }) =>
  postsByID[id] || { noItem: true };

export default connect(mapStateToProps)(PostsListItem);
