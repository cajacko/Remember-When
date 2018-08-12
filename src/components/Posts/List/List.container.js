// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import PostsList from './List.render';

export const mapStateToProps = ({ posts: { list } }) => ({
  posts: list.map(id => ({ key: id, id })),
});

export default connect(mapStateToProps)(PostsList);
