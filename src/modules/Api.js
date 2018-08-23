// @flow

import BaseApi from '@cajacko/lib/dist/modules/Api';

class Api extends BaseApi {
  savePost(post) {
    return this.db().set(['posts', post.id], post);
  }
}

export default Api;
