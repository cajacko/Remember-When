// @flow

import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
import withErrorBoundaryIfDataNotFound from '@cajacko/lib/dist/components/HOCs/withErrorBoundaryIfDataNotFound';
import errors from '@cajacko/lib/dist/config/errors';
import { createSelector } from 'reselect';
import PostsSingleCommon from '../Common';

const mapItemFromIDMap = reducerKey =>
  createSelector(
    (
      state,
      {
        match: {
          params: { id },
        },
      }
    ) => state[reducerKey].get(id),
    item => (item ? item.toJS() : { dataNotFound: true })
  );

export const mapStateToProps = mapItemFromIDMap('posts');

const PostsSingleCommonWithDataCheck = withErrorBoundaryIfDataNotFound(
  PostsSingleCommon,
  errors[4],
  'Posts/Single/Existing/Existing.container did not receive any data'
);

const PostsSingleCommonWithRedux = connect(mapStateToProps)(PostsSingleCommonWithDataCheck);

export default withRouter(PostsSingleCommonWithRedux);
