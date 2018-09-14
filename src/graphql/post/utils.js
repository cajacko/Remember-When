// @flow

/**
 * Given an object return only the props the db expects
 *
 * @param {Object} param0 The original post object
 *
 * @return {Object} The exact props we need for the db
 */
export const getValidPostProps = ({
  id,
  content,
  date,
  dateCreated,
  dateLastModified,
}) => ({
  id,
  content,
  date,
  dateCreated,
  dateLastModified,
});
