import { useBaseService } from '~/composables/services/useBaseService.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';

export const useUserMenus = () => {
  const $service = useBaseService('menus.user');

  const menus = ref([
    useMenuItem({
      icon: 'LayoutDashboardIcon',
      title: 'Dashboard',
      to: { name: 'home' },
    }),
    useMenuItem({
      icon: 'LibraryIcon',
      title: 'Libraries',
      to: { name: 'libraries.index' },
    }),
    useMenuItem({
      type: 'divider',
    }),
    useMenuItem({
      icon: 'SlidersHorizontalIcon',
      title: 'Settings',
      to: { name: 'settings.index' },
    }),
    useMenuItem({
      icon: 'LogOutIcon',
      title: 'Sign out',
      to: { name: 'logout' },
    }),
  ]);

  return $service.merge({
    menus,
  });
};
