import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';
import { NOT_FOUND_CODE, NOT_FOUND_MESSAGE } from '~/composables/types/useStatusType.js';

export const useGetLibraryService = async () => {
  const $service = useBaseService('library.show');
  const $route = useRoute();
  const code = computed(() => $route.params.library);
  const type = useState('library.type', () => '');

  $service.startLoading();

  try {
    const data = await useApi(`/libraries/${code.value}`, {
      key: `library.${code.value}`,
      params: {
        _embed: 'contents',
      },
    });

    $service.set(data);
    type.value = data?.type;
  } catch (error) {
    throw createError({
      statusCode: error?.response?.status || NOT_FOUND_CODE,
      statusMessage: error?.response?.message || NOT_FOUND_MESSAGE,
      fatal: true,
    });
  } finally {
    $service.stopLoading();
  }

  return $service.merge({
    code,
    type,
  });
};
