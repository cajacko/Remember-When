// @flow

import React from 'react';
import { withRouter } from '@cajacko/lib/dist/lib/react-router';
import { Div } from '@cajacko/lib/dist/components/UI';
import Text from '@cajacko/lib/dist/components/Text';
import ButtonsText from '@cajacko/lib/dist/components/Buttons/Text';

const SceneUnknown = ({ itemAction, history: { push } }) => (
  <Div>
    <Text text="Unknown" />
    <ButtonsText text="Home" action={() => push('/')} />
  </Div>
);

export default withRouter(SceneUnknown);
