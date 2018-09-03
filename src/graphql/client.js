// @flow

import graphqlClient from '@cajacko/lib/utils/graphqlClient';
import * as post from './post/client';

const client = {
  savePost: post.set,
  deletePost: post.remove,
};

export default graphqlClient(
  client,
  'http://localhost:5000/remember-when-6b84a/us-central1/graphql/graphql'
);
