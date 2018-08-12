// @flow

import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
import Single from './Single.component';
import { savePost } from '../../../store/posts/actions';

const mapStateToProps = (
  { posts: { postsByID } },
  {
    match: {
      params: { id },
    },
  }
) => postsByID[id] || {};

const mapDispatchToProps = dispatch => ({
  save: (id, content) => dispatch(savePost(id, content)),
});

const SingleWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);

export default withRouter(SingleWithRedux);
