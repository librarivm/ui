import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';
import { useUuid } from '~/composables/utils/useUuid.js';

export const useItemsProps = () => {
  return {
    items: Array,
    itemTitle: { type: String, default: 'title' },
    itemSubtitle: { type: String, default: 'subtitle' },
    itemValue: { type: String, default: 'value' },
    itemHref: { type: Function, default: () => undefined },
    itemSrc: { type: String, default: 'src' },
    itemActive: { type: String, default: 'active' },
    itemDescription: { type: String, default: 'description' },
    itemType: { type: String, default: 'type' },
    itemIcon: { type: String, default: 'icon' },
    firstItemSelected: { type: Boolean, default: false },
    selected: Array,
    multiple: Boolean,
  };
};

/**
 * @param {ComputedRef<array>} items
 * @param {Object} options
 * @property {boolean} isMultiSelect
 * @returns {{selected: Ref<UnwrapRef<*[]>, UnwrapRef<*[]> | *[]>, select: Function, items: [*] extends [Ref] ? IfAny<*, Ref<*>, *> : Ref<UnwrapRef<*>, *>}}
 */
export const useItemsPropsSelection = (items, options = {}) => {
  const selected = ref([]);
  const { name, isMultiSelect, firstItemSelected } = {
    name: useUuid('.'),
    firstItemSelected: false,
    isMultiSelect: true,
    ...options,
  };

  const makeItems = (items) => {
    return items?.map((item, i) => ({
      ...item,
      selected: firstItemSelected ? i === 0 && true : false,
    }));
  };

  const mappedItems = useState(`${name}.selected`, () => makeItems(items?.value ?? []));

  watch(
    items,
    (val) => {
      mappedItems.value = makeItems(val);
    },
    { immediate: true }
  );

  const onSelectFn = ref(() => {});
  const onSelect = (fn) => (onSelectFn.value = fn);

  const select = (item) => {
    if (isObject(item)) {
      if (!isMultiSelect) {
        (mappedItems.value || []).forEach((i) => {
          i.selected = false;
        });
      }

      item.selected = !isNil(item.selected) ? !item.selected : true;
      selected.value = (mappedItems.value || []).filter((i) => i.selected);
    } else {
      const exists = selected.value.includes(item);
      selected.value = exists
        ? (selected.value || []).filter((i) => i !== item)
        : [...selected.value, item];

      if (!isMultiSelect) {
        selected.value = [selected.value?.[0]];
      }
    }

    onSelectFn.value(selected.value);
  };

  const selectFromIndex = (index) => {
    const item = mappedItems.value.find((_, i) => index === i);
    select(item);
  };

  return {
    selected,
    select,
    onSelect,
    makeItems,
    selectFromIndex,
    items: mappedItems,
  };
};
