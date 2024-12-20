import kebabCase from 'lodash/kebabCase';
import isEmpty from 'lodash/isEmpty';

/**
 * @param {MenuItem} item
 * @param $route
 * @returns {{}}
 */
export const useMenuItem = (item, $route) => {
  const value = item.value || item?.props?.to?.meta?.name || kebabCase(item.title);
  const active = ref(false);

  const isActive = (item) => $route?.meta?.name === (item?.to?.meta?.name || item?.to?.name);
  const isActiveRoute = (name) => $route?.meta?.name === name;

  if (
    (item.isActive ?? isActive(item)) ||
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
    }
  );
};
