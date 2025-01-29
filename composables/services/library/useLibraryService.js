import { useBaseService } from '~/composables/services/useBaseService.js';
import { useMenus } from '~/composables/menus/useMenus.js';

export const useLibraryService = () => {
  const $route = useRoute();
  const $service = useBaseService('library.service');
  const $context = useMenus('library.context');

  $context.defineMenus(() => [
    { title: 'Edit', icon: 'PencilIcon', action: 'edit' },
    { title: 'Delete', icon: 'TrashIcon', action: 'remove' },
    { title: 'Duplicate', icon: 'CopyIcon', action: 'duplicate' },
  ]);

  $service.defineHeaders(() => [
    { icon: 'FoldersIcon', title: 'Title' },
    { title: 'Description', sortable: false },
    { title: 'Created', value: 'created_at' },
    { title: 'Modified', value: 'updated_at' },
    { title: 'Actions', sortable: false, attrs: { class: 'justify-end' } },
  ]);

  $service.defineItems((item) => ({
    ...item,
    title: '',
    poster: '',
  }));

  const list = async () => {
    $service.startLoading();

    const data = await $service.api('/libraries', {
      params: $route.query,
    });

    $service.setItems(data?.items || data);
    $service.setMetadata({ ...data?.metadata, ...$route.query });

    $service.emit('listed', $service.items);
    $service.stopLoading();
  };

  const show = async (id) => {
    $service.startLoading();

    const data = await $service.api(`/libraries/${id}`, {
      params: {
        _embed: 'collections',
        ...$route.query,
      },
    });

    $service.setData(data);
    $service.setType(data.type);

    $service.emit('showed', $service.data);
    $service.stopLoading();
  };

  const store = async (attributes) => {
    $service.startLoading();

    const data = await $service.api('/libraries', {
      method: 'post',
      data: attributes,
    });

    $service.emit('stored', data);
    $service.stopLoading();
  };

  const update = async (id, attributes) => {
    $service.startLoading();

    const data = await $service.api(`/libraries/${id}`, {
      method: 'put',
      data: attributes,
    });

    $service.emit('updated', data);
    $service.stopLoading();
  };

  const remove = async (id) => {
    $service.startLoading();

    const data = await $service.api(`/libraries/${id}`, {
      method: 'delete',
    });

    $service.emit('removed', data);
    $service.stopLoading();
  };

  return $service.merge({
    list,
    show,
    store,
    update,
    remove,
    $context,
  });
};
