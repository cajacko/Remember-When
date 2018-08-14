// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import mapIDList from '@cajacko/lib/dist/utils/containers/mapIDlist';
import PostsList from './List.render';

export const mapStateToProps = mapIDList('posts', ['list'], 'posts');

export default connect(mapStateToProps)(PostsList);
