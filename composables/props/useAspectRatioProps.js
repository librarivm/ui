export const useAspectRatioProps = () => {
  return {
    /** @type import('vue').PropType<BaseImageAspectRatioType> */
    aspectRatio: { type: String, default: 'auto' },
  };
};

export const getAspectRatioHeight = (type) => {
  switch (type) {
    case 'square':
    case 'video':
      return 'h-[150px] md:h-[200px]';
    case 'avatar':
      return 'h-[135px] md:h-[175px]';
    case 'poster':
    case 'auto':
    default:
      return 'h-[174px] md:h-[300px]';
  }
};

export const getAspectRatioWidth = (type) => {
  switch (type) {
    case 'avatar':
      return 'max-w-[135px] md:w-[175px]';
    case 'video':
      return 'max-w-[250px]';
    case 'auto':
      return 'max-w-[130px] md:max-w-[200px]';
    case 'poster':
    default:
      return 'w-[116px] md:w-[200px]';
  }
};
