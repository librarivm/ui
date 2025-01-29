export const usePlacementProps = (fallback = 'top left') => {
  return {
    /** @type import('vue').PropType<PositionalPlacementType> */
    placement: { type: String, default: fallback },
  };
};
