export const useDisabledProps = (fallback = false) => {
  return {
    disabled: { type: Boolean, default: fallback },
  };
};
