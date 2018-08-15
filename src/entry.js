// @flow

import errors from '@cajacko/lib/dist/utils/errors';
import errorMessages from './config/errors';
import { ENTRY } from './config/routes';
import reducers from './store/reducers';

errors.setErrors(errorMessages);

export const ROUTES = ENTRY;

export const REDUCERS = reducers;
