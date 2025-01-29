/**
 * @param {boolean} fallback
 * @returns {{active: {type: BooleanConstructor, default: boolean}}}
 */
export const useActiveProps = (fallback = false) => {
  return {
    active: { type: Boolean, default: fallback },
  };
};
