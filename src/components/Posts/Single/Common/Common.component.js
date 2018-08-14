// @flow

import React, { Component } from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import withDatePicker from '@cajacko/lib/dist/components/HOCs/withDatePicker';
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
      content: props.content || '',
      editing: this.isNewPost(props),
      date: ensureDate(props.date, new Date()),
    };

    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.edit = this.edit.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.showDatePicker = this.showDatePicker.bind(this);
  }

  componentWillReceiveProps({ content, date }) {
    const state = {};

    if (content !== this.props.content) {
      state.content = content;
    }

    if (date !== this.props.date) {
      state.date = ensureDate(date, new Date());
    }

    if (Object.keys(state).length) {
      this.setState(state);
    }
  }

  componentWillUnmount() {
    this.props.datePicker.hideDatePicker();
  }

  onChange(text) {
    this.setState({ content: text });
  }

  save() {
    this.props.save(this.props.id, this.state.content, this.state.date);

    this.props.datePicker.hideDatePicker();

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

    return pathname === '/new-post' || !id;
  }

  isPostInEditMode(props) {
    return this.state.editing || this.isNewPost(props);
  }

  showDatePicker() {
    const initialDate = new Date(this.state.date);

    this.props.datePicker.showDatePicker({
      date: this.state.date,
      mode: 'date',
      onDateChange: (date) => {
        this.setState({ date: ensureDate(date) });
      },
      onDateCancel: () => {
        this.setState({ date: ensureDate(initialDate) });
      },
      onDateSet: (date) => {
        this.setState({ date: ensureDate(date) });
      },
    });
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
      <PostsSingle
        onChange={this.onChange}
        content={this.state.content || ''}
        isInEditMode={this.isPostInEditMode()}
        date={this.state.date}
        save={this.save}
        edit={this.edit}
        showDatePicker={this.showDatePicker}
        deletePost={this.deletePost}
        isNewPost={this.isNewPost()}
      />
    );
  }
}

export default withRouter(withDatePicker(PostsSingleCommonComponent));
