// @flow

import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import { connect } from '@cajacko/lib/lib/react-redux';
import { compose } from 'redux';
import withErrorBoundaryIfDataNotFound from '@cajacko/lib/components/HOCs/withErrorBoundaryIfDataNotFound';
import errors from '@cajacko/lib/utils/errors';
import postByIDSelector from '../../../../utils/selectors/postByIDSelector';
import PostsSingleCommon from '../Common';

/**
 * Grab the post from the redux store, based off the route id
 *
 * @param {Object} state The redux state
 * @param {Object} param1 The props passed to the component
 *
 * @return {Object} The new props to spread on the component
 */
export const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) => postByIDSelector(state, id);

export default compose(
  withErrorBoundaryIfDataNotFound(
    errors.getError('200-001'),
    'Posts/Single/Existing/Existing.container did not receive any data'
  ),
  withRouter,
  connect(mapStateToProps)
)(PostsSingleCommon);
