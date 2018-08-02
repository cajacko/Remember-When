// @flow

import React from 'react';
import PostsList from '../Posts/List';
import ContentWithTabNav from '../Layout/ContentWithTabNav';

const App = () => (
  <ContentWithTabNav>
    <PostsList />
  </ContentWithTabNav>
);

export default App;
