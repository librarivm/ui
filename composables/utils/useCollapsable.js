import { useMerge } from '~/composables/utils/useMerge.js';
import { useStorage } from '@vueuse/core';
import { useUuid } from '~/composables/utils/useUuid.js';

/**
 * A composable utility function that provides functionality to manage
 * the collapsible state of a UI component, using reactive state management.
 *
 * @param {string} [name=useUuid()] - An optional name or identifier for the collapsible state.
 * If not provided, a unique ID will be generated using `useUuid()`.
 * @param {boolean} [fallback=false] - The default value.
 *
 * @returns {object} - An object with the following properties and methods:
 * - `collapsed`: A reactive state representing whether the component is collapsed.
 * - `expanded`: A computed property indicating the opposite state of `collapsed` (i.e., whether the component is expanded).
 * - `collapse`: A method to set the state to collapse.
 * - `expand`: A method to set the state to expanded.
 * - `rail`: A method to toggle between the collapsed and expanded states.
 */
export const useCollapsable = (name = useUuid(), fallback = false) => {
  const collapsed = useStorage(`${name}.collapsed`, fallback);

  const expanded = computed(() => !collapsed.value);

  const collapse = () => (collapsed.value = true);
  const expand = () => (collapsed.value = false);
  const rail = () => (collapsed.value = !collapsed.value);

  return useMerge({
    name,
    collapsed,
    expanded,
    collapse,
    expand,
    rail,
  });
};
