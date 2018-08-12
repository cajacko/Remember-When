// @flow

/**
 * Generate a random guid
 *
 * @return {String} The random guid
 */
const generateID = () => {
  /**
   * Generate a random part of the guid
   *
   * @return {String} PArt of the guid to set
   */
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export default generateID;
