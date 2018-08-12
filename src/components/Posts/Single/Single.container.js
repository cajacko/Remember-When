// @flow

import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { connect } from '@cajacko/lib/dist/lib/react-redux';
import { createSelector } from 'reselect';
import Single from './Single.component';
import { savePost } from '../../../store/posts/actions';

export const mapStateToProps = (
  state,
  {
    match: {
      params: { id },
    },
  }
) =>
  createSelector(
    ({ posts }) => posts.get('postsByID').get(id),
    post => (post ? post.toJS() : {})
  )(state);

const mapDispatchToProps = dispatch => ({
  save: (id, content) => dispatch(savePost(id, content)),
});

const SingleWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Single);

export default withRouter(SingleWithRedux);
