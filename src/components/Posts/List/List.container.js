// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import orderedPostsSelector from '../../../utils/selectors/orderedPostsSelector';
import PostsList from './List.render';

export const mapStateToProps = orderedPostsSelector;

export default connect(mapStateToProps)(PostsList);
