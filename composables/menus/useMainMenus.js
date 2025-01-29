import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { useResolveIconComponentFromType } from '~/composables/utils/useResolveIconComponentFromType.js';
import { useBaseService } from '~/composables/services/useBaseService.js';
import { useMenus } from '~/composables/menus/useMenus.js';

export const useMainMenus = () => {
  const $service = useBaseService('menus.main');
  const $menu = useMenus('menus.main');
  const $route = useRoute();
  const $params = ref($route.params);
  const { defineMenuItem } = useMenuItem();

  const load = async () => {
    $service.startLoading();

    const data = await $service.api('/menus');

    $menu.defineMenus(() =>
      [
        defineMenuItem({
          icon: 'LayoutDashboardIcon',
          title: 'Home',
          to: { name: 'home' },
          isActive: $route.meta?.name === 'home',
        }),
      ].concat(
        Object.values(data || []).map((item) => {
          const isActive = $params.value.library === item.slug;

          return defineMenuItem({
            icon: useResolveIconComponentFromType(item.type),
            title: item.title,
            to: { name: 'libraries.show', params: { library: item.slug } },
            isActive: isActive,
          });
        })
      )
    );

    $service.stopLoading();
  };

  return $service.merge({
    load,
    ...$menu,
  });
};
