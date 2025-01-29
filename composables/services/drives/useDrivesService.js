import { useBaseService } from '~/composables/services/useBaseService.js';

export const useDrivesService = () => {
  const $service = useBaseService('drives.service');

  const list = async () => {
    $service.startLoading();

    const items = await $service.api('/paths');
    $service.setItems(items);

    $service.stopLoading();
  };

  return $service.merge({
    list,
  });
};
