<script setup>
import TextField from '~/components/controls/TextField.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import FolderPlusIcon from '~/components/icons/FolderPlusIcon.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import BaseCardFooter from '~/components/containments/BaseCardFooter.vue';
import FolderOpenIcon from '~/components/icons/FolderOpenIcon.vue';
import BaseCardHeader from '~/components/containments/BaseCardHeader.vue';
import CloseIcon from '~/components/icons/CloseIcon.vue';
import { useDrivesService } from '~/composables/services/drives/useDrivesService.js';
import BaseList from '~/components/containments/BaseList.vue';

const $emit = defineEmits(['click:cancel', 'click:submit']);

const $service = useDrivesService();
await $service.list();

const { items: drives, loading } = $service;

// const form = useForm('folders');
const form = reactive({
  path: '',
});

const metadata = ref({
  subfolders: [],
});

const onCancel = () => {
  // form.reset();
  $emit('click:cancel');
};

const onItemClick = (item) => {
  form.path = item.path;
  metadata.value.subfolders = item.contents;
};

const onSubfolderItemClick = (item) => {
  form.path = item.path;
};

const onSubmit = () => {
  $emit('click:submit', form);
};
</script>

<template>
  <form
    :disabled="loading"
    class="overflow-y-auto max-h-[inherit] flex flex-col gap-4"
    data-component="add-folders-form"
    @submit.prevent="onSubmit"
  >
    <BaseCard>
      <BaseCardHeader class="gap-4 border-b justify-between">
        <span class="flex gap-4 items-center">
          <FolderPlusIcon class="size-4" />
          Browse folders
        </span>
        <BaseButton class="p-1 size-[28px]" size="xs" variant="ghost" @click="onCancel">
          <CloseIcon class="size-4" />
        </BaseButton>
      </BaseCardHeader>
      <BaseCardContent>
        <TextField v-model="form.path" label="Path" required />
      </BaseCardContent>

      <div class="border-t overflow-y-auto">
        <AppGrid class="min-h-80 gap-0" grid="6">
          <AppColumn class="border-r p-4" col="2">
            <span class="font-bold block mb-4">Drives</span>
            <BaseList
              :items="drives"
              item-value="path"
              name="folders.drives"
              @click:item="onItemClick"
            >
              <template v-slot:[`item.prepend`]>
                <FolderOpenIcon class="size-4" />
              </template>
            </BaseList>
          </AppColumn>
          <AppColumn class="p-4" col="4">
            <span class="font-bold block mb-4">Folders</span>
            <BaseList
              :items="metadata.subfolders"
              item-value="path"
              name="folders.subfolders"
              @click:item="onSubfolderItemClick"
            >
              <template v-slot:[`item.prepend`]>
                <FolderOpenIcon class="size-4" />
              </template>
            </BaseList>
          </AppColumn>
        </AppGrid>
      </div>

      <BaseCardFooter class="border-t">
        <BaseButton variant="filled" @click="onCancel">Cancel</BaseButton>
        <BaseButton :disabled="loading" variant="primary" @click="onSubmit">
          <FolderPlusIcon class="size-4" />
          Add Folder
        </BaseButton>
      </BaseCardFooter>
    </BaseCard>
  </form>
</template>
