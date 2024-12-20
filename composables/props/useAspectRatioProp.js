export const useAspectRatioProp = () => {
  return {
    /** @type import('vue').PropType<BaseImageAspectRatioType> */
    aspectRatio: { type: String, default: 'auto' },
  };
};
