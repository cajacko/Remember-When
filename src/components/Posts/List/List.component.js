// @flow

import React, { Component } from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import PostsList from './List.render';

class PostsListComponent extends Component {
  constructor(props) {
    super(props);

    this.itemAction = this.itemAction.bind(this);
  }

  itemAction({ id }) {
    return () => {
      this.props.history.push(`/post/${id}`);
    };
  }

  render() {
    return <PostsList itemAction={this.itemAction} {...this.props} />;
  }
}

export default withRouter(PostsListComponent);
