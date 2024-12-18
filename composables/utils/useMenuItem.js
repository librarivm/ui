/**
 * @typedef { 'divider' | 'subheader' | 'link'} MenuItemType
 * @typedef {Object} MenuItem
 * @property {string} value - Unique identifier for the menu.
 * @property {string} title - Title for the menu.
 * @property {MenuItemType} type - Type for the menu.
 * @property {import('vue').Component} icon - Icon component for the menu.
 * @property {import('vue-router').RouteLocationRaw} to - Destination route for the <NuxtLink> component. Can be a string, object, or named route.
 * @property {MenuItem[]?} submenus - Alias for `children` for flexibility.
 * @property {string[]?} activatableRouteNames - List of route names that mark this menu as active.
 */

import kebabCase from 'lodash/kebabCase';
import isEmpty from 'lodash/isEmpty';

/**
 * @param {MenuItem} item
 * @returns {{}}
 */
export const useMenuItem = (item) => {
  const $router = useRouter();
  const currentRoute = computed(() => $router.currentRoute.value);

  const value = item.value || item?.props?.to?.meta?.name || kebabCase(item.title);
  const active = ref(false);

  const isActive = (item) =>
    currentRoute.value?.meta?.name === (item?.to?.meta?.name || item?.to?.name);
  const isActiveRoute = (name) => currentRoute.value?.meta?.name === name;

  if (
    isActive(item) ||
    !isEmpty((item.submenus || []).filter((submenu) => isActive(submenu))) ||
    !isEmpty((item.activatableRouteNames || []).filter((name) => isActiveRoute(name)))
  ) {
    active.value = true;
  }

  return Object.assign(
    {
      type: 'link',
    },
    item,
    {
      value,
      active,
      is_parent: !isEmpty(item.submenus),
      // hasSubmenus: () => !isEmpty(item.submenus),
      // hasChildren: () => !isEmpty(item.children),
    }
  );
};
