import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';
import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { useResolveIconComponentFromType } from '~/composables/utils/useResolveIconComponentFromType.js';

export const useAppMenus = async () => {
  const $route = useRoute();
  const $service = useBaseService('menus.app');
  const $menus = useMainNavigationSidebarStore();

  $service.startLoading();
  $menus.setType('library');

  const { data } = await useAsyncData('app.menus.main', () => useApi('/menus'));

  const menus = [
    useMenuItem({
      icon: 'LayoutDashboardIcon',
      title: 'Dashboard',
      to: { name: 'dashboard' },
    }),
  ].concat(
    Object.values(data?.value || []).map((item) => {
      const isActive = computed(() => $route.params.library === item.slug);
      return useMenuItem({
        icon: useResolveIconComponentFromType(item.type),
        title: item.title,
        to: { name: 'libraries.show', params: { library: item.slug } },
        isActive: isActive.value,
      });
    })
  );

  $service.set(menus);
  $menus.set(menus);

  $service.stopLoading();

  return $service.merge();
};
