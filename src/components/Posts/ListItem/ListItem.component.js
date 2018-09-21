// @flow

import React, { Component } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import PostsListItem from './ListItem.render';
import type { ReactRouter } from '../../../types/General';
import type { PostID, PostContent } from '../../../types/Post';

type Props = ReactRouter & {
  id: PostID,
  baseRoute: string,
  content: PostContent,
  date: Date,
};

/**
 * Business logic for the posts list item
 *
 * ATM just handles the routing
 */
class PostsListItemComponent extends Component<Props> {
  static defaultProps: {};

  /**
   * Initialise the class, bind the actions
   *
   * @param {Object} props The props passed to the component
   *
   * @return {Void} No return value
   */
  constructor(props) {
    super(props);

    (this: any).action = this.action.bind(this);
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
