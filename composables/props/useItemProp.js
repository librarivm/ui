import isNil from 'lodash/isNil';
import isObject from 'lodash/isObject';

export const useItemProp = () => {
  return {
    items: Array,
    itemTitle: { type: String, default: 'title' },
    itemValue: { type: String, default: 'value' },
    itemSrc: { type: String, default: 'src' },
    selected: Array,
  };
};

export const useItemPropSelection = () => {
  const selected = ref([]);

  const select = (item) => {
    if (isObject(item)) {
      item.selected = !isNil(item.selected) ? !item.selected : true;
      selected.value = selected.value.filter((i) => i.selected);
    } else {
      const exists = selected.value.includes(item);
      selected.value = exists
        ? selected.value.filter((i) => i !== item)
        : [...selected.value, item];
    }
  };

  return {
    selected,
    select,
  };
};
