import { useBaseService } from '~/composables/services/useBaseService.js';

export const useTypeService = () => {
  const $service = useBaseService('types.service');

  const list = async () => {
    $service.startLoading();

    const types = await $service.api('/types');

    $service.setItems(types);

    $service.stopLoading();
  };

  return $service.merge({
    list,
  });
};
