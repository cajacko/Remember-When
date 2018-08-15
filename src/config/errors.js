// @flow

import marketingCopy from '@cajacko/lib/dist/utils/marketingCopy';

const errors = {
  '200-001': {
    label: 'Data Not Found',
    title: marketingCopy.get('Errors.DataNotFound.Title'),
    message: marketingCopy.get('Errors.DataNotFound.Message'),
  },
};

export default errors;
