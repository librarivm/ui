import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';

export const useListTypesService = async () => {
  const $service = useBaseService('types.index');

  $service.startLoading();

  const types = await useApi('/types');

  $service.set(types);

  $service.stopLoading();

  return $service.merge({
    types,
  });
};
