import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';

export const useDrivesListService = async () => {
  const $service = useBaseService('drives');

  $service.startLoading();

  const data = await useApi('/paths');
  $service.set(data);

  $service.stopLoading();

  return $service.merge();
};
