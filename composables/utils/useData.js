import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

/**
 * @param {string} name - A unique name/identifier for the data state. Defaults to a UUID.
 * @param {Object} options - Options to initialize the data list and selected data list.
 */
export const useData = (name = useUuid(), options = {}) => {
  const data = useState(`${name}.data`, () => options?.data || {});
  const defineData = (cb) => (data.value = cb(data.value));
  const setData = (attributes) => (data.value = { ...data.value, ...attributes });
  const unsetData = () => (data.value = {});

  return useMerge({
    name,
    defineData,
    data,
    setData,
    unsetData,
  });
};
