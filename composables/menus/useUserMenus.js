import { useBaseService } from '~/composables/services/useBaseService.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';

export const useUserMenus = () => {
  const $service = useBaseService('menus.user');
  const { defineMenuItem } = useMenuItem();

  const menus = ref([
    defineMenuItem({
      icon: 'LayoutDashboardIcon',
      title: 'Dashboard',
      to: { name: 'home' },
    }),
    defineMenuItem({
      icon: 'LibraryIcon',
      title: 'Libraries',
      to: { name: 'libraries.index' },
    }),
    defineMenuItem({
      type: 'divider',
    }),
    defineMenuItem({
      icon: 'SlidersHorizontalIcon',
      title: 'Settings',
      to: { name: 'settings.index' },
    }),
    defineMenuItem({
      icon: 'LogOutIcon',
      title: 'Sign out',
      to: { name: 'logout' },
    }),
  ]);

  return $service.merge({
    menus,
  });
};
