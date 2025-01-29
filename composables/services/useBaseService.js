import { useMerge } from '~/composables/utils/useMerge';
import { useUuid } from '~/composables/utils/useUuid';
import { useEventBus } from '~/composables/utils/useEventBus.js';
import { NOT_FOUND_CODE, NOT_FOUND_MESSAGE } from '~/composables/types/useStatusType.js';
import { useApi } from '~/composables/api/useApi.js';
import { useLoadingState } from '~/composables/utils/useLoadingState.js';
import { useItems } from '~/composables/utils/useItems.js';
import { useMetadata } from '~/composables/utils/useMetadata.js';
import { useData } from '~/composables/utils/useData.js';
import { useType } from '~/composables/utils/useType.js';
import { useHeader } from '~/composables/utils/useHeader.js';
import { useSelected } from '~/composables/utils/useSelected.js';

/**
 * Base service hook.
 *
 * @param {string} name - The name for the service state.
 * @param {Function} factory - The attributes for the base service.
 * @param {string} factory.endpoint - The required endpoint URL for the service.
 * @param {...Object?} factory.options - Additional options for the service.
 * @returns {Object} The base service object containing the endpoint and options.
 */
export const useBaseService = (name = useUuid(), factory = null) => {
  const $route = useRoute();
  const $query = computed(() => $route.query);
  const $event = useEventBus(name);

  const { endpoint, ...$options } = factory ? factory() : {};

  const $loader = useLoadingState(name);

  const $headers = useHeader(name);
  const $selected = useSelected(name);
  const $items = useItems(name);
  const $metadata = useMetadata(name);
  const $data = useData(name);
  const $type = useType(name);

  const api = async (endpoint, options) => useApi(endpoint, options);

  const fatallyThrow = (err) => {
    throw createError({
      statusCode: err?.statusCode || NOT_FOUND_CODE,
      statusMessage: err?.statusMessage || NOT_FOUND_MESSAGE,
      fatal: err?.fatal ?? true,
    });
  };

  watch($query, () => {
    $event.emit('query:changed', $route.query);
  });

  const $exportables = {
    api,
    endpoint,
    fatallyThrow,
  };

  return useMerge({
    ...$exportables,
    ...$event,
    ...$loader,
    ...$type,
    ...$data,
    ...$headers,
    ...$selected,
    ...$items,
    ...$metadata,
    ...$options,
    name,
  });
};
