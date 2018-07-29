// @flow

import React, { Component } from 'react';
import PostsList from './List.render';

class PostsListComponent extends Component {
  itemAction({ id }) {
    return () => {
      console.log('itemAction', id);
    };
  }

  render() {
    return <PostsList itemAction={this.itemAction} {...this.props} />;
  }
}

export default PostsListComponent;
