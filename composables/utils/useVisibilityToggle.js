import { useMerge } from '~/composables/utils/useMerge.js';

export const useVisibilityToggle = (name, visibility = false) => {
  const shown = useState(`${name}.shown`, () => visibility);

  const show = () => (shown.value = true);
  const hide = () => (shown.value = false);
  const toggle = () => (shown.value = !shown.value);

  return useMerge({
    shown,
    show,
    hide,
    toggle,
  });
};
