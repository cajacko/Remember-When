// @flow

import { connect } from '@cajacko/lib/dist/lib/react-redux';
import PostsSingleCommon from './Common.component';
import { savePost, deletePost } from '../../../../store/posts/actions';

const mapDispatchToProps = dispatch => ({
  save: (id, content, date) => dispatch(savePost(id, content, date)),
  delete: id => dispatch(deletePost(id)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(PostsSingleCommon);
