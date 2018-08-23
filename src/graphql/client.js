// @flow

import graphqlClient from '@cajacko/lib/dist/utils/graphqlClient';
import * as post from './post/client';

const client = {
  post,
};

export default graphqlClient(client);
