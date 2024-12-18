import { useLocalStorage } from '@vueuse/core';

export const useMainNavigationSidebarStore = defineStore('app.navigation', () => {
  const $route = useRoute();
  const shown = useState('app.navigation.shown', () =>
    useLocalStorage('app.navigation.shown', true)
  );
  const collapsed = useState('app.navigation.collapsed', () =>
    useLocalStorage('app.navigation.collapsed', false)
  );
  const expanded = computed(() => !collapsed.value);
  const current = computed(() => get($route.meta.name));

  const show = () => (shown.value = true);
  const hide = () => (shown.value = false);
  const toggle = () => (shown.value = !shown.value);

  const collapse = () => (collapsed.value = true);
  const expand = () => (collapsed.value = false);
  const rail = () => (collapsed.value = !collapsed.value);

  const items = useState('app.navigation.items', () => []);
  const get = (name) => items.value.find((item) => item.to?.name === name);
  const set = (menus) => (items.value = menus);

  return {
    collapsed,
    expanded,
    current,

    shown,
    show,
    hide,
    toggle,

    collapse,
    expand,
    rail,

    items,
    get,
    set,
  };
});
