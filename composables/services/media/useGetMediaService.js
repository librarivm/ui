import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';

export const useGetMediaService = async () => {
  const $service = useBaseService('media.show');
  const $route = useRoute();
  const params = computed(() => $route.params);
  const type = useState('library.type', () => '');

  $service.startLoading();
  console.log(18, $route, params);

  const data = await useApi(`/media/${params.value.media}`, {
    key: `media.${params.value.media}`,
  });

  $service.set(data);

  $service.stopLoading();

  return $service.merge({
    type,
  });
};
