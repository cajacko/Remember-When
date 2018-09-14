// @flow

import React from 'react';
import PostsList from '../../Posts/List';

/**
 * Render the home scene
 *
 * @param {Object} props The props passed to the component, check flow for more
 * detail
 *
 * @return {ReactElement} The components markup to render
 */
const ScenesHome = () => <PostsList baseRoute="/home" />;

export default ScenesHome;
