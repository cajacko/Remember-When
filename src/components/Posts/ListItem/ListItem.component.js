// @flow

import React, { Component } from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import logger from '@cajacko/lib/dist/utils/logger';
import withLogIfDataNotFound from '@cajacko/lib/dist/components/HOCs/withLogIfDataNotFound';
import PostsListItem from './ListItem.render';

class PostsListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.action = this.action.bind(this);
  }

  action() {
    this.props.history.push(`${this.props.baseRoute}/post/${this.props.id}`);
  }

  render() {
    if (this.props.noItem) return null;

    return <PostsListItem action={this.action} {...this.props} />;
  }
}

PostsListItemComponent.defaultProps = {
  baseRoute: '',
};

export default withLogIfDataNotFound(
  withRouter(PostsListItemComponent),
  "PostsListItemComponent received no post info, looks like it's not in the redux store"
);
