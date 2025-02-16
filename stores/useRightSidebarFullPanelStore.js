import { useVisibility } from '~/composables/utils/useVisibility.js';

export const useRightSidebarFullPanelStore = defineStore('right.sidebar.full.panel', () => {
  const $service = useVisibility('rightsidebar', false);
  const width = useState('rightsidebar.width', () => '40%');
  const expanded = useState('rightsidebar.expanded', () => false);
  const condensed = computed(() => !expanded.value);

  const setWidth = (value) => (width.value = value);

  const expand = () => {
    expanded.value = !expanded.value;
  };

  return $service.merge({
    width,
    setWidth,
    expand,
    expanded,
    condensed,
  });
});
