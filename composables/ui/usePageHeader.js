import { useVisibilityToggle } from '~/composables/utils/useVisibilityToggle.js';
import { useLocalStorage } from '@vueuse/core';

export const usePageHeader = () => {
  const $base = useVisibilityToggle('page.header', true);

  const fixed = useState(`page.header.fixed`, () => useLocalStorage('page.header.fixed', true));
  const fix = (isFixed = true) => (fixed.value = isFixed);
  const unfix = () => (fixed.value = false);

  return $base.merge({
    fixed,
    fix,
    unfix,
  });
};
