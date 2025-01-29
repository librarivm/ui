import { useVisibility } from '~/composables/utils/useVisibility.js';

export const useUserMenuStore = defineStore('user.menu', () => {
  const $base = useVisibility('user.menu');

  return $base.merge();
});
