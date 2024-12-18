/** @typedef {Object<string, any>} MergableAttributes */

/** @param {MergableAttributes} options */
export const useMerge = (options) => {
  /** @param {MergableAttributes} attributes */
  const merge = (attributes = {}) => ({
    ...options,
    ...attributes,
  });

  return {
    ...options,
    merge,
  };
};
