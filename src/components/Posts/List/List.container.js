// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import orderedPostsWithSectionsSelector from '../../../utils/selectors/orderedPostsWithSectionsSelector';
import PostsList from './List.render';

export const mapStateToProps = orderedPostsWithSectionsSelector;

export default connect(mapStateToProps)(PostsList);
