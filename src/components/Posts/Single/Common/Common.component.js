// @flow

import React, { Component } from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import Form from '@cajacko/lib/components/Forms/Form';
import { ensureDate } from '@cajacko/lib/utils/dates';
import PostsSingle from './Common.render';
import type { ReactRouter } from '../../../../types/General';
import type { PostID, PostContent } from '../../../../types/Post';

type Props = ReactRouter & {
  id: PostID,
  save: (PostID, PostContent, Date) => void,
  delete: PostID => void,
  date: Date,
  content: PostContent,
};

type State = {
  editing: boolean,
};

type TextAreaRef = {
  blur: () => void,
};

/**
 * Business logic for the single posts component. Handle text change and submit
 */
class PostsSingleCommonComponent extends Component<Props, State> {
  static defaultProps: {};

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

    (this: any).save = this.save.bind(this);
    (this: any).toggleEditMode = this.toggleEditMode.bind(this);
    (this: any).deletePost = this.deletePost.bind(this);
    (this: any).onTextAreaFocus = this.onTextAreaFocus.bind(this);
    (this: any).setTextAreaRef = this.setTextAreaRef.bind(this);
  }

  /**
   * When the component updates blur the textarea if we're not editing anymore
   *
   * @param {Object} prevProps The previous component props
   * @param {Object} prevState The previous component state
   *
   * @return {Void} No return value
   */
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.editing && !this.state.editing) {
      if (this.textArea) this.textArea.blur();
    }
  }

  /**
   * When the text area goes into focus, turn on edit mode
   *
   * @return {Void} No return value
   */
  onTextAreaFocus() {
    if (!this.state.editing) {
      this.toggleEditMode(true)();
    }
  }

  /**
   * Store the textArea ref
   *
   * @param {Object} ref The text area ref
   *
   * @return {Void} No return value
   */
  setTextAreaRef(ref: TextAreaRef) {
    this.textArea = ref;
  }

  textArea: ?TextAreaRef;

  /**
   * Save the post if the data has changed. Will also hide the datepicker. And
   * redirect if this ws a new post
   *
   * @param {Object} formState The state from the form
   * @param {Boolean} dataHasChanged Whether the data is different than whats
   * saved
   *
   * @return {Function} The function that actually calls save
   */
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

  /**
   * Toggle editing mode
   *
   * @param {Boolean} editing Whether we are editing or not
   *
   * @return {Function} the func that actually makes the call
   */
  toggleEditMode(editing) {
    return () => {
      if (!editing && this.isNewPost()) {
        this.props.history.goBack();
      } else {
        if (this.state.editing === editing) return;
        this.setState({ editing });
      }
    };
  }

  /**
   * Is the post a new one or not. Based off the route and id
   *
   * @param {Object} props The props to check against
   *
   * @return {Boolean} Whether or not the post is new
   */
  isNewPost(props) {
    const {
      location: { pathname },
      id,
    } = props || this.props;

    return pathname === '/new-post' || !id;
  }

  /**
   * figure out if the post is in edit mode. A new post is always in edit mode
   *
   * @param {Object} props The props to check against
   *
   * @return {Boolean} Whether the post is in edit mode
   */
  isPostInEditMode(props) {
    return this.state.editing || this.isNewPost(props);
  }

  /**
   * Delete the post and redirect
   *
   * @return {Void} No return value
   */
  deletePost() {
    this.props.delete(this.props.id);

    this.props.history.push('/');
  }

  /**
   * Show the datepicker and blur the text area
   *
   * @param {Function} showDatePicker The show date picker func
   *
   * @return {Function} The func that actually makes the call
   */
  showDatePicker(showDatePicker) {
    return () => {
      if (this.textArea) this.textArea.blur();
      this.toggleEditMode(true)();
      showDatePicker('date')();
    };
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
            showDatePicker={this.showDatePicker(showDatePicker)}
            deletePost={this.deletePost}
            isNewPost={this.isNewPost()}
            cancelEdit={cancel}
            dataHasChanged={dataHasChanged}
            onTextAreaFocus={this.onTextAreaFocus}
            setTextAreaRef={this.setTextAreaRef}
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
