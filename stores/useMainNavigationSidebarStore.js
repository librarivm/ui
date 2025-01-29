import { useCollapsable } from '~/composables/utils/useCollapsable.js';
import { useItems } from '~/composables/utils/useItems.js';
import { useLoadingState } from '~/composables/utils/useLoadingState.js';
import { useVisibility } from '~/composables/utils/useVisibility.js';

export const useMainNavigationSidebarStore = defineStore('app.menus.main', () => {
  const $route = useRoute();
  const $loading = useLoadingState('app.menus.main', false);
  const $collapsable = useCollapsable('app.menus.main', false);
  const $visibility = useVisibility('app.menus.main', true);
  const $items = useItems('app.menus.main');

  const type = useState('app.menus.main.type', () => undefined);
  const setType = (value) => (type.value = value);

  const isActive = (item, param = 'slug') =>
    $route.params?.[type.value ?? param] === item.to?.params?.[type.value ?? param] || false;

  const resetActiveStates = () => {
    ($items.items.value || []).forEach((item) => {
      item.isActive = false;
    });
  };

  return {
    type,
    setType,

    isActive,
    resetActiveStates,

    ...$loading,
    ...$collapsable,
    ...$visibility,
    ...$items,
  };
});
