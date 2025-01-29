import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

/**
 * @typedef {Object} BaseItems
 * @property {Function} defineItems - Function to define items with a callback.
 * @property {Array} items - Array of items.
 * @property {Array} selectedItems - Array of selected items.
 * @property {Function} makeItem - Function to merge attributes into an item.
 * @property {Function} setItems - Function to set multiple items.
 * @property {Function} addItem - Function to add a new item.
 * @property {Function} removeItem - Function to remove an item by index.
 * @property {Function} selectItem - Function to select an item.
 * @property {Function} unselectItem - Function to unselect an item.
 * @property {(attributes: Object) => Object} merge - Function to merge attributes into options.
 */

/**
 * A composable function for managing a list of items, with additional utility methods for item manipulation and selection management.
 * This function allows creating, modifying, selecting, and unselecting items in a reactive state.
 *
 * @param {string} [name=useUuid()] - The unique identifier for the items state. Defaults to a generated UUID if not provided.
 * @param {Object} [options={}] - The configuration options for initializing the items state.
 * @param {Array} [options.items=[]] - The initial array of items. Defaults to an empty array if not provided.
 * @param {Array} [options.selectedItems=[]] - The initial array of selected items. Defaults to an empty array if not provided.
 *
 * @returns {BaseItems & Object} Returns an object containing reactive states and utility methods.
 */
export const useItems = (name = useUuid(), options = {}) => {
  const items = useState(`${name}.items`, () => options?.items || []);
  const selectedItems = useState(`${name}.selectedItems`, () => options?.selectedItems || []);
  const item = ref({});

  const defineDefaultItem = (item) => ({ ...item, selected: false });

  const defineItems = (cb) => (item.value = cb(defineDefaultItem(item.value)));

  const makeItem = (attribute) => ({ ...item.value, ...attribute });
  const setItems = (attributes) => (items.value = (attributes || []).map(item => makeItem(item)));
  const addItem = (item) => items.value.push(item);
  const removeItem = (index) => items.value.splice(index, 1);

  const selectItem = (item) => (item.selected = true);
  const unselectItem = (item) => (item.selected = false);

  return useMerge({
    name,
    defineItems,

    items,
    selectedItems,

    makeItem,
    setItems,
    addItem,
    removeItem,
    selectItem,
    unselectItem,
  });
};
