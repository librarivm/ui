export const useClosableProps = (fallback = false) => {
  return {
    closable: { type: Boolean, default: fallback },
  };
};
