// @flow

import React from 'react';
import withRouter from '@cajacko/lib/components/HOCs/withRouter';
import TextArea from '@cajacko/lib/components/Forms/TextArea';
import HeaderWithContent from '@cajacko/lib/components/Layout/HeaderWithContent';
import { format } from '@cajacko/lib/utils/dates';
import Button from '@cajacko/lib/components/Button';
import Align from '@cajacko/lib/components/Layout/Align';
import buttons from '@cajacko/lib/config/styles/buttons';
import type { ReactRouter } from '../../../../types/General';
import type { PostContent } from '../../../../types/Post';

type Props = ReactRouter & {
  content: PostContent,
  date: Date,
  isInEditMode: boolean,
  onChange: () => {},
  save: () => {},
  edit: () => {},
  showDatePicker: () => {},
  deletePost: () => {},
  isNewPost: boolean,
  cancelEdit: () => {},
  dataHasChanged: boolean,
  onTextAreaFocus: () => {},
  setTextAreaRef: () => {},
};

/**
 * Render a single post, and how it looks when editing
 *
 * @param {Object} props The props passed to the component
 *
 * @return {ReactElement} The markup to render
 */
const PostsSingle = ({
  content,
  date,
  history: { goBack },
  isInEditMode,
  onChange,
  save,
  edit,
  showDatePicker,
  deletePost,
  isNewPost,
  cancelEdit,
  dataHasChanged,
  onTextAreaFocus,
  setTextAreaRef,
}: Props) => (
  <HeaderWithContent
    header={{
      back: isInEditMode ? null : goBack,
      title: { _textFromConst: format('fullDate', date) },
      rightText: isInEditMode ? 'General.Save' : 'General.Edit',
      rightAction: isInEditMode ? save : edit,
      titleAction: showDatePicker,
      leftText: isInEditMode ? 'General.Cancel' : null,
      leftAction: isInEditMode ? cancelEdit : null,
      rightButtonStyle:
        (dataHasChanged && isInEditMode) || !isInEditMode
          ? buttons.TRANSPARENT.PRIMARY
          : buttons.TRANSPARENT.BLACK,
    }}
  >
    <TextArea
      autoFocus={isNewPost}
      value={content}
      onChange={onChange}
      onFocus={onTextAreaFocus}
      innerRef={setTextAreaRef}
    />
    {isInEditMode &&
      !isNewPost && (
        <Align centerHorizontally>
          <Button
            action={deletePost}
            text="General.Delete"
            type={buttons.CONTAINED.SECONDARY}
          />
        </Align>
      )}
  </HeaderWithContent>
);

export default withRouter(PostsSingle);
