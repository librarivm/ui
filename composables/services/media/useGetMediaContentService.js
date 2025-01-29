import { useBaseService } from '~/composables/services/useBaseService.js';
import { useApi } from '~/composables/api/useApi.js';

export const useGetMediaContentService = async () => {
  const $route = useRoute();
  const $id = computed(() => $route.params.content);
  const $service = useBaseService(`media.content.${$id}`);

  try {
    $service.startLoading();
    const data = await useApi(`/contents/${$id.value}`);
    $service.set(data);
  } catch (e) {
    throw createError({
      statusCode: e.statusCode,
      statusMessage: e.statusMessage,
      message: e.message,
      fatal: true,
    });
  } finally {
    $service.stopLoading();
  }

  return $service.merge();
};
