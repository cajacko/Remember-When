// @flow

// Good idea to do this first, so everything has access to the error codes
import './utils/setErrors';

import { ENTRY } from './config/routes';
import reducers from './store/reducers';

export const ROUTES = ENTRY;

export const REDUCERS = reducers;
