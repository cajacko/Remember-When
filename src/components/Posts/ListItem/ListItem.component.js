// @flow

import React, { Component } from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import PostsListItem from './ListItem.render';

class PostsListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.action = this.action.bind(this);
  }

  action() {
    this.props.history.push(`/post/${this.props.id}`);
  }

  render() {
    return <PostsListItem action={this.action} {...this.props} />;
  }
}

export default withRouter(PostsListItemComponent);
