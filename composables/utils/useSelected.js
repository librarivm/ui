import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

/**
 * Creates a reactive state for selected items and manages header definitions.
 *
 * The `useSelected` function initializes a reactive state `selected` with a default
 * name and options. It provides utilities to define default headers for items
 * and allows for setting custom headers through a callback function.
 *
 * @function useSelected
 * @param {string} [name=useUuid()] - A unique identifier for the selected state.
 * @param {Object} [options={}] - Configuration options for initializing the state.
 * @param {Array} [options.selected=[]] - Initial value of the selected state.
 * @returns {Object} The reactive selected state and functions to manage headers:
 * - `name` {string}: The unique identifier for the selected state.
 * - `selected` {Ref<Array>}: The reactive state holding selected items.
 * - `defineSelected` {Function}: Function to set custom headers using a callback returning items.
 */
export const useSelected = (name = useUuid(), options = {}) => {
  const selected = useState(`${name}.selected`, () => options?.selected || []);

  const defineDefaultSelected = (items) =>
    items.map((item) => ({
      selected: true,
      ...item,
    }));

  const defineSelected = (cb) => (selected.value = defineDefaultSelected(cb()));

  return useMerge({
    name,
    selected,
    defineSelected,
  });
};
