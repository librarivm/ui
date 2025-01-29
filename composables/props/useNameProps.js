export const useNameProps = (fallback = undefined) => {
  return {
    name: { type: String, default: fallback },
  };
};
