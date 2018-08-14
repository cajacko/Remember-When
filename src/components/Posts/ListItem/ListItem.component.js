// @flow

import React, { Component } from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import logger from '@cajacko/lib/dist/utils/logger';
import PostsListItem from './ListItem.render';

class PostsListItemComponent extends Component {
  constructor(props) {
    super(props);

    this.action = this.action.bind(this);

    if (props.noItem) this.onNoItem();
  }

  componentWillReceiveProps(props) {
    if (props.noItem && !this.props.noItem) {
      this.onNoItem();
    }
  }

  onNoItem() {
    logger.error(
      "PostsListItemComponent received no post info, looks like it's not in the redux store",
      this.props
    );
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

export default withRouter(PostsListItemComponent);
