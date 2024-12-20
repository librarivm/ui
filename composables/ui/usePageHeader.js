import { useVisibilityToggle } from '~/composables/utils/useVisibilityToggle.js';
import { useLocalStorage } from '@vueuse/core';

export const usePageHeader = () => {
  const $base = useVisibilityToggle('page.header', true);

  const sticky = useState(`page.header.sticky`, () => useLocalStorage('page.header.sticky', true));
  const stick = (isFixed = true) => (sticky.value = isFixed);
  const unstick = () => (sticky.value = false);

  return $base.merge({
    sticky,
    stick,
    unstick,
  });
};
