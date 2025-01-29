import kebabCase from 'lodash/kebabCase';
import isEmpty from 'lodash/isEmpty';
import merge from 'lodash/merge.js';

/**
 * @param {MenuItem} item
 * @returns {{}}
 */
export const useMenuItem = (item) => {
  const $route = useRoute();

  const value = item.value || item?.props?.to?.meta?.name || kebabCase(item.title);
  const active = ref(false);

  const isActive = (item) =>
    ($route?.meta?.name ?? $route.name) === (item?.to?.meta?.name || (item?.to?.name ?? false));
  const isActiveRoute = (name) => $route?.meta?.name === name;

  if (
    (item.isActive ?? isActive(item)) ||
    !isEmpty((item.submenus || []).filter((submenu) => isActive(submenu))) ||
    !isEmpty((item.activatableRouteNames || []).filter((name) => isActiveRoute(name)))
  ) {
    active.value = true;
  }

  return merge({ type: 'link' }, item, {
    value,
    active: active.value,
    isParent: !isEmpty(item.submenus),
  });
};
