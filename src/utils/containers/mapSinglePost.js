// @flow

import mapItemFromIDMap from '@cajacko/lib/dist/utils/containers/mapItemFromIDMap';

const mapSinglePost = (state, id) =>
  mapItemFromIDMap(id, 'posts', ['postsByID'])(state);

export default mapSinglePost;
