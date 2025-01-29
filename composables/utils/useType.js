import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

/**
 * @param {string} name - A unique name/identifier for the type state. Defaults to a UUID.
 * @param {Object} options - Options to initialize the type list and selected type list.
 */
export const useType = (name = useUuid(), options = {}) => {
  const type = useState(`${name}.type`, () => options?.type || undefined);
  const setType = (value) => (type.value = value);
  const unsetType = () => (type.value = undefined);

  return useMerge({
    name,
    type,
    setType,
    unsetType,
  });
};
