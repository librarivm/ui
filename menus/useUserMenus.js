import { useBaseService } from '~/composables/services/useBaseService.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';

export const useUserMenus = () => {
  const $service = useBaseService();

  const menus = ref([
    useMenuItem({
      icon: 'LayoutDashboardIcon',
      title: 'Dashboard',
      to: { name: 'dashboard' },
    }),
    useMenuItem({
      icon: 'SlidersHorizontalIcon',
      title: 'Settings',
      to: { name: 'dashboard' },
    }),
    useMenuItem({
      type: 'divider',
    }),
    useMenuItem({
      icon: 'LogOutIcon',
      title: 'Sign out',
      to: { name: 'dashboard' },
    }),
  ]);

  return $service.merge({
    menus,
  });
};
