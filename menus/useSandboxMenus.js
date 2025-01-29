import { useBaseService } from '~/composables/services/useBaseService';
import { useMenuItem } from '~/composables/utils/useMenuItem';

export const useSandboxMenus = () => {
  const $service = useBaseService();
  const $menus = useMainNavigationSidebarStore();

  const MENU_ITEMS = [
    useMenuItem({
      icon: 'LayoutDashboardIcon',
      title: 'Home',
      to: { name: 'home' },
    }),
    useMenuItem({
      icon: 'PaletteIcon',
      title: 'UI Components',
      to: { name: 'sandbox.ui' },
    }),
    useMenuItem({
      type: 'subheader',
      title: 'Containment',
    }),
    useMenuItem({
      icon: 'PanelBottomUpIcon',
      title: 'Bottom Sheets',
      to: { name: 'sandbox.show', params: { type: 'containments', slug: 'bottom-sheets' } },
    }),
    useMenuItem({
      icon: 'SquareMousePointerIcon',
      title: 'Buttons',
      to: { name: 'sandbox.show', params: { type: 'containments', slug: 'buttons' } },
    }),
    useMenuItem({
      icon: 'IdCardIcon',
      title: 'Cards',
      to: { name: 'sandbox.show', params: { type: 'containments', slug: 'cards' } },
    }),
    // useMenuItem({
    //   title: 'Buttons',
    //   to: { name: 'sandbox.show', params: { type: 'containments', slug: 'buttons' } },
    // }),
    // useMenuItem({
    //   title: 'Cards',
    //   to: { name: 'sandbox.show', params: { type: 'containments', slug: 'cards' } },
    // }),
    // useMenuItem({
    //   title: 'Chips',
    //   to: { name: 'sandbox.show', params: { type: 'containments', slug: 'chips' } },
    // }),
    // useMenuItem({
    //   title: 'Dialogs',
    //   to: { name: 'sandbox.show', params: { type: 'containments', slug: 'dialogs' } },
    // }),
    //
    // useMenuItem({
    //   icon: 'NavigationIcon',
    //   type: 'subheader',
    //   title: 'Navigation',
    // }),
    //
    // useMenuItem({
    //   icon: 'SquareMousePointerIcon',
    //   type: 'subheader',
    //   title: 'Selections',
    // }),
    // useMenuItem({
    //   title: 'Items Strip',
    //   to: { name: 'sandbox.show', params: { type: 'selections', slug: 'items-strip' } },
    // }),
  ];

  $menus.set(MENU_ITEMS);

  return $service.merge({
    items: MENU_ITEMS,
  });
};
