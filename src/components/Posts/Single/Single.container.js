// @flow

import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
import Single from './Single.component';
import mapSinglePost from '../../../utils/containers/mapSinglePost';
import { savePost, deletePost } from '../../../store/posts/actions';

export const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => mapSinglePost(state, id);

const mapDispatchToProps = dispatch => ({
  save: (id, content, date) => dispatch(savePost(id, content, date)),
  delete: id => dispatch(deletePost(id)),
});

const SingleWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);

export default withRouter(SingleWithRedux);
