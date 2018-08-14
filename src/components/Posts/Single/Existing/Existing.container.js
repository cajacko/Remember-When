// @flow

import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
import withErrorBoundaryIfDataNotFound from '@cajacko/lib/dist/components/HOCs/withErrorBoundaryIfDataNotFound';
import errors from '@cajacko/lib/dist/config/errors';
import PostsSingleCommon from '../Common';
import mapSinglePost from '../../../../utils/containers/mapSinglePost';

export const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => mapSinglePost(state, id);

const PostsSingleCommonWithDataCheck = withErrorBoundaryIfDataNotFound(
  PostsSingleCommon,
  errors[4],
  'Posts/Single/Existing/Existing.container did not receive any data'
);

const PostsSingleCommonWithRedux = connect(mapStateToProps)(PostsSingleCommonWithDataCheck);

export default withRouter(PostsSingleCommonWithRedux);
