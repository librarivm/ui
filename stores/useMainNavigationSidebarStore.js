import { useLocalStorage } from '@vueuse/core';

export const useMainNavigationSidebarStore = defineStore('app.navigation', () => {
  const $route = useRoute();
  const type = useState('app.navigation.type', () => undefined);
  const shown = useState('app.navigation.shown', () =>
    useLocalStorage('app.navigation.shown', true)
  );
  const collapsed = useState('app.navigation.collapsed', () =>
    useLocalStorage('app.navigation.collapsed', false)
  );
  const expanded = computed(() => !collapsed.value);
  const current = computed(() => get($route.meta.name));

  const setType = (value) => (type.value = value);

  const show = () => (shown.value = true);
  const hide = () => (shown.value = false);
  const toggle = () => (shown.value = !shown.value);

  const collapse = () => (collapsed.value = true);
  const expand = () => (collapsed.value = false);
  const rail = () => (collapsed.value = !collapsed.value);

  const items = useState('app.navigation.items', () => []);
  const get = (name) => items.value.find((item) => item.to?.name === name);
  const set = (menus) => (items.value = menus);

  const isActive = (item, param = 'slug') => {
    return $route.params[type.value ?? param] === item.to?.params?.[type.value ?? param] || false;
  };
  const resetActiveStates = () => {
    (items.value || []).forEach((item) => {
      item.isActive = false;
    });
  };

  return {
    type,
    setType,

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

    isActive,
    resetActiveStates,
  };
});
