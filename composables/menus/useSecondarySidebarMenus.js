import { useMenuItem } from '~/composables/utils/useMenuItem.js';
import { useMenus } from '~/composables/menus/useMenus.js';

export const useSecondarySidebarMenus = () => {
  const $service = useMenus('menus.main');
  const $route = useRoute();
  const meta = computed(() => $route.meta);
  const isDark = useDark();
  const toggleDark = useToggle(isDark);

  watchEffect(() => {
    $service.defineMenus(() => [
      useMenuItem({
        icon: 'ThemeDarkIcon',
        title: 'Switch Theme',
        action: 'switch-theme',
      }),
      useMenuItem({
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
