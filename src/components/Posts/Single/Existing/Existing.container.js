// @flow

import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
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

const PostsSingleCommonWithRedux = connect(mapStateToProps)(PostsSingleCommon);

export default withRouter(PostsSingleCommonWithRedux);
