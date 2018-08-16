// @flow

import withRouter from '@cajacko/lib/dist/components/HOCs/withRouter';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
import withErrorBoundaryIfDataNotFound from '@cajacko/lib/dist/components/HOCs/withErrorBoundaryIfDataNotFound';
import errors from '@cajacko/lib/dist/utils/errors';
import postByIDSelector from '../../../../utils/selectors/postByIDSelector';
import PostsSingleCommon from '../Common';

export const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => postByIDSelector(state, id);

const PostsSingleCommonWithDataCheck = withErrorBoundaryIfDataNotFound(
  PostsSingleCommon,
  errors.getError('200-001'),
  'Posts/Single/Existing/Existing.container did not receive any data'
);

const PostsSingleCommonWithRedux = connect(mapStateToProps)(PostsSingleCommonWithDataCheck);

export default withRouter(PostsSingleCommonWithRedux);
