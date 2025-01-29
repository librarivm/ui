import { useBaseService } from '~/composables/services/useBaseService.js';

export const useMediaService = () => {
  const $service = useBaseService('media.service');

  const list = async () => {
    $service.startLoading();

    const items = await $service.api('/media');

    $service.setItems(items);

    $service.stopLoading();
  };

  const find = async (id) => {
    $service.startLoading();

    const data = await $service.api(`/media/${id}`);

    $service.setData(data);

    $service.stopLoading();
  };

  return $service.merge({
    list,
    find,
  });
};
