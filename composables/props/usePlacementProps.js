export const usePlacementProps = () => {
  return {
    /** @type import('vue').PropType<PositionalPlacementType> */
    placement: { type: String, default: 'top left' },
  };
};
