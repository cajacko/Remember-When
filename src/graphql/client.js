// @flow

import graphqlClient from '@cajacko/lib/utils/graphqlClient';
import * as post from './post/client';

const client = {
  post,
};

export default graphqlClient(client);
