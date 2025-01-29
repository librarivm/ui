import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import isNil from 'lodash/isNil.js';

export const useMenus = (name = useUuid()) => {
  const $route = useRoute();
  const menus = useState(`${name}.menus`);
  const { defineMenuItem } = useMenuItem();

  const defineMenus = (cb) => (menus.value = cb().map((item) => defineMenuItem(item)));

  const isActive = (item, param = 'slug') => {
    if (isNil($route.params?.[param]) || isNil(item.to?.params?.[param])) {
      return $route.meta.name === item.to?.name;
    }

    return $route.params?.[param] === item.to?.params?.[param] || false;
  };

  const resetActiveStates = () => {
    (menus.value || []).forEach((item) => {
      item.isActive = false;
    });
  };

  return useMerge({ menus, defineMenus, isActive, resetActiveStates });
};
