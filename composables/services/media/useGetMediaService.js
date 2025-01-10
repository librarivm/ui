import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';
import isNil from 'lodash/isNil';

export const useGetMediaService = async () => {
  const $service = useBaseService('media.show');
  const $route = useRoute();
  const params = computed(() => $route.params);
  const type = useState('library.type', () => '');

  try {
    $service.startLoading();

    const data = await useApi(`/media/${params.value.media}`);

    isNil(data) && $service.fatallyThrow();

    $service.set(data);
  } catch (err) {
    $service.fatallyThrow(err);
  } finally {
    $service.stopLoading();
  }

  return $service.merge({
    type,
  });
};
