
/**
 * A utility function to merge objects.
 *
 * @template T
 * @param {T} options - The base options to merge.
 * @returns {T} The merged object with a merge method.
 */
export const useMerge = (options) => {
  /** @param {{}} attributes */
  const merge = (attributes = {}) => ({
    ...options,
    ...attributes,
  });

  return {
    ...options,
    merge,
  };
};
