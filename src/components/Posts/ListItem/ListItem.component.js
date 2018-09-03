// @flow

import React, { Component } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
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
    return <PostsListItem action={this.action} {...this.props} />;
  }
}

PostsListItemComponent.defaultProps = {
  baseRoute: '',
};

export default withRouter(PostsListItemComponent);
