import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

export const useAppBreakpoints = () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const isMobile = useState('breakpoints.is_mobile', () => breakpoints.smaller('md').value);

  onMounted(() => {
    watchEffect(() => {
      isMobile.value = breakpoints.smaller('md').value;
    });
  });

  return {
    breakpoints,
    isMobile,
  };
};
