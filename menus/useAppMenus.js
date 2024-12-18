import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { resolveIconComponentFromType } from '~/composables/utils/resolveIconComponentFromType.js';

export const useAppMenus = async () => {
  const $service = useBaseService('menus.app');
  const $menus = useMainNavigationSidebarStore();

  $service.startLoading();

  const response = await useApi('/menus', { key: 'menus.app', cache: true });

  const menus = [
    useMenuItem({
      icon: 'LayoutDashboardIcon',
      title: 'Dashboard',
      to: { name: 'dashboard' },
    }),
  ].concat(
    Object.values(response.data?.value || []).map((item) => {
      return useMenuItem({
        icon: resolveIconComponentFromType(item.type),
        title: item.title,
        to: { name: 'libraries.show', params: { library: item.slug } },
      });
    })
  );

  $service.set(menus);
  $menus.set(menus);

  $service.stopLoading();

  return $service.merge();
};
