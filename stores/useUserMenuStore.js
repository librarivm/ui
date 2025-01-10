import { useVisibilityToggle } from '~/composables/utils/useVisibilityToggle.js';

export const useUserMenuStore = defineStore('user.menu', () => {
  const $base = useVisibilityToggle('user.menu');

  return $base.merge();
});
