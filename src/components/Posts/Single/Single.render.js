// @flow

import React from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { Div } from '@cajacko/lib/dist/components/UI';
import Text from '@cajacko/lib/dist/components/Text';
import ButtonsText from '@cajacko/lib/dist/components/Buttons/Text';

const PostsList = ({ itemAction, history: { push } }) => (
  <Div>
    <Text text="Hello" />
    <ButtonsText text="Back" action={() => push('/')} />
  </Div>
);

export default withRouter(PostsList);
