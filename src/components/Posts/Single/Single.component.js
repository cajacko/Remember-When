// @flow

import React, { Component } from 'react';
import PostsSingle from './Single.render';

/**
 * Business logic for the single posts component. Handle text change and submit
 */
class PostsSingleComponent extends Component {
  /**
   * Initialise the class, set the initial state and bind the methods
   *
   * @param {Object} props The props passed to the component, check flow for
   * more detail
   *
   * @return {Void} No return value
   */
  constructor(props) {
    super(props);

    this.state = {
      content: props.content || '',
      editing: this.isNewPost(props),
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentWillReceiveProps({ content }) {
    if (content !== this.props.content) {
      this.setState({ content });
    }
  }

  onChange(text) {
    this.setState({ content: text });
  }

  save() {
    this.props.save(this.props.id, this.state.content);

    if (this.isNewPost()) {
      this.props.history.push('/');
    } else {
      this.setState({ editing: false });
    }
  }

  edit() {
    this.setState({ editing: true });
  }

  isNewPost(props) {
    const {
      location: { pathname },
      id,
    } = props || this.props;

    return pathname === '/post/new' || !id;
  }

  isPostInEditMode(props) {
    return this.state.editing || this.isNewPost(props);
  }

  /**
   * Render the component
   *
   * @return {ReactElement} Markup to render
   */
  render() {
    return (
      <PostsSingle
        onChange={this.onChange}
        content={this.state.content || ''}
        isInEditMode={this.isPostInEditMode()}
        date={this.props.date || new Date()}
        save={this.save}
        edit={this.edit}
      />
    );
  }
}

export default PostsSingleComponent;
