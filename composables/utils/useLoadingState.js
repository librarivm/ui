import { useUuid } from '~/composables/utils/useUuid.js';
import { useMerge } from '~/composables/utils/useMerge.js';

export const useLoadingState = (name = useUuid(), fallback = false) => {
  const loading = useState(`${name}.loading`, () => fallback);

  const startLoading = () => (loading.value = true);

  const stopLoading = () => (loading.value = false);

  return useMerge({ name, loading, startLoading, stopLoading });
};
