// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import mapSinglePost from '../../../utils/containers/mapSinglePost';
import PostsListItem from './ListItem.component';

export const mapStateToProps = (state, { id }) => mapSinglePost(state, id);

export default connect(mapStateToProps)(PostsListItem);
