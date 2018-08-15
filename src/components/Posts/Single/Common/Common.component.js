// @flow

import React, { Component } from 'react';
import isEqual from 'lodash/isEqual';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import Form from '@cajacko/lib/dist/components/Forms/Form';
import { ensureDate } from '@cajacko/lib/dist/utils/dates';
import PostsSingle from './Common.render';

/**
 * Business logic for the single posts component. Handle text change and submit
 */
class PostsSingleCommonComponent extends Component {
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
      editing: this.isNewPost(props),
    };

    this.save = this.save.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  save({ content, date, hideDatePicker }, dataHasChanged) {
    return () => {
      if (dataHasChanged) {
        this.props.save(this.props.id, content, date);
      }

      hideDatePicker();

      if (this.isNewPost()) {
        this.props.history.push('/');
      } else {
        this.setState({ editing: false });
      }
    };
  }

  toggleEditMode(editing) {
    return () => {
      this.setState({ editing });
    };
  }

  isNewPost(props) {
    const {
      location: { pathname },
      id,
    } = props || this.props;

    return pathname === '/new-post' || !id;
  }

  isPostInEditMode(props) {
    return this.state.editing || this.isNewPost(props);
  }

  deletePost() {
    this.props.delete(this.props.id);

    this.props.history.push('/');
  }

  /**
   * Render the component
   *
   * @return {ReactElement} Markup to render
   */
  render() {
    return (
      <Form
        date={ensureDate(this.props.date)}
        content={this.props.content}
        onCancel={this.toggleEditMode(false)}
      >
        {({
          showDatePicker,
          onChange,
          cancel,
          dataHasChanged,
          ...formState
        }) => (
          <PostsSingle
            onChange={onChange('content')}
            content={formState.content}
            isInEditMode={this.isPostInEditMode()}
            date={formState.date}
            save={this.save(formState, dataHasChanged)}
            edit={this.toggleEditMode(true)}
            showDatePicker={showDatePicker('date')}
            deletePost={this.deletePost}
            isNewPost={this.isNewPost()}
            cancelEdit={cancel}
          />
        )}
      </Form>
    );
  }
}

PostsSingleCommonComponent.defaultProps = {
  content: '',
  date: new Date(),
};

export default withRouter(PostsSingleCommonComponent);
