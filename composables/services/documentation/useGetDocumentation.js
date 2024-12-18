import { useBaseService } from '~/composables/services/useBaseService.js';
import { queryContent } from '#imports';

/**
 *
 * @param {string} dir
 * @returns {{loading: Ref<UnwrapRef<boolean>, UnwrapRef<boolean> | boolean>, startLoading: function(): boolean, stopLoading: function(): boolean, selected: Ref<UnwrapRef<[]>, UnwrapRef<[]> | []>, data: UnwrapNestedRefs<{items: [], meta: {}}> & {}, endpoint: *}}
 */
export const useGetDocumentation = async (dir) => {
  const $service = useBaseService();
  const { merge } = $service;
  const content = ref();

  content.value = await queryContent('documentation', dir).findOne();

  return merge({
    content,
  });
};
