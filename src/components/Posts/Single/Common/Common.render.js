// @flow

import React from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import TextArea from '@cajacko/lib/dist/components/Forms/TextArea';
import HeaderWithContent from '@cajacko/lib/dist/components/Layout/HeaderWithContent';
import { format } from '@cajacko/lib/dist/utils/dates';
import Button from '@cajacko/lib/dist/components/Button';
import Align from '@cajacko/lib/dist/components/Layout/Align';

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
}) => (
  <HeaderWithContent
    header={{
      back: goBack,
      title: format('fullDate', date),
      rightText: isInEditMode ? 'Save' : 'Edit',
      rightAction: isInEditMode ? save : edit,
      titleAction: showDatePicker,
      noButton: !isInEditMode,
    }}
  >
    <TextArea
      value={content}
      editable={isInEditMode}
      onChange={onChange}
      autoFocus={isInEditMode}
    />
    {isInEditMode &&
      !isNewPost && (
        <Align centerHorizontally>
          <Button
            action={deletePost}
            text="Delete"
            type="CONTAINED"
            theme="SECONDARY"
          />
        </Align>
      )}
  </HeaderWithContent>
);

export default withRouter(PostsSingle);
