export const useLoadingProps = (fallback = false) => {
  return {
    loading: { type: Boolean, default: fallback },
  };
};
