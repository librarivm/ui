export const useItemsGroupProps = () => {
  return {
    /** @type import('vue').PropType<ItemsGroupVariantType> */
    variant: { type: String, default: 'grid' },
    /** @type import('vue').PropType<ItemsGroupStripScrollByType> */
    scrollBy: { type: [String, Number], default: 'auto' },
    centerOnActive: { type: Boolean, default: true },
    container: Boolean,
    hideControls: Boolean,
  };
};

/**
 * @param {ItemsGroupVariantType} variant
 */
export const useItemsGroup = (variant) => {
  const isGrid = computed(() => variant === 'grid');
  const isStrip = computed(() => variant === 'strip');
  const isMasonry = computed(() => variant === 'masonry');
  const isColumn = computed(() => variant === 'column');
  const isList = computed(() => variant === 'list');

  return {
    isGrid,
    isStrip,
    isMasonry,
    isColumn,
    isList,
  };
};
