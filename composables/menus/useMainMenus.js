import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { useResolveIconComponentFromType } from '~/composables/utils/useResolveIconComponentFromType.js';
import { useBaseService } from '~/composables/services/useBaseService.js';
import { useMenus } from '~/composables/menus/useMenus.js';

export const useMainMenus = async () => {
  const $service = useBaseService('menus.main');
  const $menu = useMenus('menus.main');
  const $route = useRoute();

  $service.startLoading();

  const data = await $service.api('/menus');

  $menu.defineMenus(() =>
    [
      useMenuItem({
        icon: 'LayoutDashboardIcon',
        title: 'Home',
        to: { name: 'home' },
        isActive: $route.meta?.name === 'home',
      }),
    ].concat(
      Object.values(data || []).map((item) => {
        const isActive = computed(() => $route.params.library === item.slug);
        return useMenuItem({
          icon: useResolveIconComponentFromType(item.type),
          title: item.title,
          to: { name: 'libraries.show', params: { library: item.slug } },
          isActive: isActive.value,
        });
      })
    )
  );

  $service.stopLoading();

  return $service.merge({
    ...$menu,
  });
};
