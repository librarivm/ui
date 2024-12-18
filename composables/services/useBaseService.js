import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

/**
 * Base service hook.
 *
 * @param {string} name - The name for the service state.
 * @param {Function} factory - The attributes for the base service.
 * @param {string} factory.endpoint - The required endpoint URL for the service.
 * @param {string?} factory.searchDebounceMs - The debounce value for search in millisecond.
 * @param {...Object?} factory.options - Additional options for the service.
 * @returns {Object} The base service object containing the endpoint and options.
 */
export const useBaseService = (name = useUuid(), factory = null) => {
  const { endpoint, ...options } = factory ? factory() : {};

  const loading = useState(`${name}.loading`, () => false);
  const startLoading = () => (loading.value = true);
  const stopLoading = () => (loading.value = false);

  const selected = ref([]);

  const data = useState(`${name}.data`, () => ({}));
  const set = (attributes) => (data.value = attributes);

  const exportables = {
    loading,
    startLoading,
    stopLoading,

    selected,
    data,
    set,

    endpoint,
    ...options,
  };

  return useMerge({
    ...exportables,
    ...options,
  });
};
