export const useSelectableProps = (fallback = false) => {
  return {
    selectable: { type: Boolean, default: fallback },
  };
};
