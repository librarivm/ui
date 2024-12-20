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
