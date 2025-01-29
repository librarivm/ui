import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

/**
 * @param {string} name - A unique name/identifier for the metadata state. Defaults to a UUID.
 * @param {Object} options - Options to initialize the metadata list and selected metadata list.
 */
export const useMetadata = (name = useUuid(), options = {}) => {
  const metadata = useState(`${name}.metadata`, () => options?.metadata || {});
  const defineMetadata = (cb) => (metadata.value = cb(metadata.value));
  const setMetadata = (attributes) => (metadata.value = { ...metadata.value, ...attributes });
  const unsetMetadata = () => (metadata.value = {});

  return useMerge({
    name,
    defineMetadata,
    metadata,
    setMetadata,
    unsetMetadata,
  });
};
