// @flow

import React, { Component } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import PostsListItem from './ListItem.render';
import { ReactRouter } from '../../../types/General';

type Props = {
  baseRoute: string,
  ...ReactRouter,
};

/**
 * Business logic for the posts list item
 *
 * ATM just handles the routing
 */
class PostsListItemComponent extends Component<Props> {
  /**
   * Initialise the class, bind the actions
   *
   * @param {Object} props The props passed to the component
   *
   * @return {Void} No return value
   */
  constructor(props) {
    super(props);

    this.action = this.action.bind(this);
  }

  /**
   * Handle the tap action on the list item. Redirects to the post view
   *
   * @return {Void} No return value
   */
  action() {
    this.props.history.push(`${this.props.baseRoute}/post/${this.props.id}`);
  }

  /**
   * Render the component
   *
   * @return {ReactElement} Markup to render
   */
  render() {
    return <PostsListItem action={this.action} {...this.props} />;
  }
}

PostsListItemComponent.defaultProps = {
  baseRoute: '',
};

export default withRouter(PostsListItemComponent);
