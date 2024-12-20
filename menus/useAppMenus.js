import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { useResolveIconComponentFromType } from '~/composables/utils/useResolveIconComponentFromType.js';

export const useAppMenus = async () => {
  const $route = useRoute();
  const $service = useBaseService('menus.app');
  const $menus = useMainNavigationSidebarStore();

  $service.startLoading();

  const data = await useApi('/menus');

  const menus = [
    useMenuItem(
      {
        icon: 'LayoutDashboardIcon',
        title: 'Dashboard',
        to: { name: 'dashboard' },
      },
      $route
    ),
  ].concat(
    Object.values(data || []).map((item) => {
      const isActive = computed(() => $route.params.library === item.slug);
      return useMenuItem(
        {
          icon: useResolveIconComponentFromType(item.type),
          title: item.title,
          to: { name: 'libraries.show', params: { library: item.slug } },
          isActive: isActive.value,
        },
        $route
      );
    })
  );

  $service.set(menus);
  $menus.set(menus);

  $service.stopLoading();

  return $service.merge();
};
