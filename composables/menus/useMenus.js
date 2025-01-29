import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';

export const useMenus = (name = useUuid()) => {
  const menus = useState(`${name}.menus`);

  const defineMenus = (cb) => (menus.value = cb().map((item) => useMenuItem(item)));

  return useMerge({ menus, defineMenus });
};
