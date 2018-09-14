// @flow

import { connect } from '@cajacko/lib/lib/react-redux';
import PostsSingleCommon from './Common.component';
import { savePost, deletePost } from '../../../../store/posts/actions';

/**
 * Wrap save and delete with dispatch so we can update the store
 *
 * @param {Function} dispatch The redux dispatch function
 *
 * @return {Object} The props to spread onto the component
 */
const mapDispatchToProps = dispatch => ({
  save: (id, content, date) => dispatch(savePost(id, content, date)),
  delete: id => dispatch(deletePost(id)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(PostsSingleCommon);
