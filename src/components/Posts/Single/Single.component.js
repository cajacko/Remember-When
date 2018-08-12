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
      content: props.content,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(text) {
    this.setState({ content: text });
  }

  save() {
    console.log('Save');
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
        content={this.state.content}
        isInEditMode={this.props.isInEditMode}
        date={this.props.date}
        save={this.save}
      />
    );
  }
}

export default PostsSingleComponent;
