import debounce from 'lodash/debounce';
import { useBaseService } from '~/composables/services/useBaseService';
import { useApi } from '~/composables/api/useApi';

export const useBaseSearchService = (endpoint, options) => {
  const $service = useBaseService();
  const { merge } = $service;
  const $router = useRouter();
  const $route = useRoute();

  const query = ref({
    page: 1,
    per_page: 15,
    q: undefined,
    ...$route.query,
  });

  const search = debounce(async (q) => {
    $service.startLoading();

    query.q = q;
    await $router.push({ query: query.value });

    return useApi(endpoint, options).finally(() => $service.stopLoading());
  }, 400);

  return merge({
    query,
    search,
  });
};
