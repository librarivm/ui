import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';
import isNil from 'lodash/isNil';
import { NOT_FOUND_CODE, NOT_FOUND_MESSAGE } from '~/composables/types/useStatusType.js';

export const useGetLibraryService = async () => {
  const $service = useBaseService('library.show');
  const $route = useRoute();
  const code = computed(() => $route.params.library);
  const type = useState('library.type', () => '');

  const handle = async () => {
    $service.startLoading();

    const response = await useApi(`${code.value}`);

    if (isNil(response?.data?.value)) {
      throw createError({
        statusCode: NOT_FOUND_CODE,
        statusMessage: NOT_FOUND_MESSAGE,
        fatal: true,
      });
    }

    $service.set(response.data);
    type.value = response.data.value.type;

    $service.stopLoading();
  };

  await handle();

  return $service.merge({
    code,
    type,
    handle,
  });
};
