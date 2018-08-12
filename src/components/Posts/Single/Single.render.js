// @flow

import React from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import TextArea from '@cajacko/lib/dist/components/Forms/TextArea';
import HeaderWithContent from '@cajacko/lib/dist/components/Layout/HeaderWithContent';
import { format } from '@cajacko/lib/dist/utils/dates';

const PostsSingle = ({
  content,
  date,
  history: { goBack },
  isInEditMode,
  onChange,
  save,
}) => (
  <HeaderWithContent
    header={{
      back: goBack,
      title: format('date', new Date()),
      rightText: isInEditMode && 'Save',
      rightAction: isInEditMode && save,
    }}
  >
    <TextArea
      value={content}
      editable={isInEditMode}
      onChange={onChange}
      autoFocus={isInEditMode}
    />
  </HeaderWithContent>
);

export default withRouter(PostsSingle);
