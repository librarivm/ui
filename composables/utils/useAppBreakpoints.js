import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

export const useAppBreakpoints = () => {
  const breakpoints = () => {
    return useBreakpoints(breakpointsTailwind);
  };

  return {
    breakpoints,
  };
};
