import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { useMenus } from '~/composables/menus/useMenus.js';

export const useSecondarySidebarMenus = () => {
  const $service = useMenus('menus.secondary');
  const $route = useRoute();
  const meta = computed(() => $route.meta);
  const isDark = useDark();
  const toggleDark = useToggle(isDark);
  const { defineMenuItem } = useMenuItem();

  watchEffect(() => {
    $service.defineMenus(() => [
      defineMenuItem({
        icon: 'ThemeDarkIcon',
        title: 'Switch Theme',
        action: 'switch-theme',
      }),
      defineMenuItem({
        icon: 'PaletteIcon',
        title: 'Sandbox UI',
        to: { name: 'sandbox.ui' },
        isActive: (meta.value?.name || $route.name) === 'sandbox.ui',
      }),
    ]);
  });

  const onMenuClick = (item) => {
    if (item.action === 'switch-theme') {
      toggleDark();
      item.icon = isDark.value ? 'ThemeLightIcon' : 'ThemeDarkIcon';
    }
  };

  return $service.merge({ onMenuClick });
};
