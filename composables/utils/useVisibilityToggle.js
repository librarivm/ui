import { useMerge } from '~/composables/utils/useMerge.js';
import { useUuid } from '~/composables/utils/useUuid.js';

export const useVisibilityToggle = (name = useUuid(), isShownByDefault = false) => {
  const shown = useState(`${name}.shown`, () => isShownByDefault);
  const hidden = computed(() => !shown.value);

  const show = () => (shown.value = true);
  const hide = () => (shown.value = false);
  const toggle = () => (shown.value = !shown.value);

  return useMerge({
    shown,
    hidden,
    show,
    hide,
    toggle,
  });
};
