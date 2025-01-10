<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import BaseCard from '~/components/containments/BaseCard.vue';
import BaseCardHeader from '~/components/containments/BaseCardHeader.vue';
import PackagePlusIcon from '~/components/icons/PackagePlusIcon.vue';
import BaseCardContent from '~/components/containments/BaseCardContent.vue';
import { useLibraryType } from '~/composables/types/useLibraryType.js';
import { useListTypesService } from '~/composables/services/types/useListTypesService.js';
import CloseIcon from '~/components/icons/CloseIcon.vue';
import TextField from '~/components/controls/TextField.vue';
import TextareaField from '~/components/controls/TextareaField.vue';
import ItemSelectField from '~/components/controls/ItemSelectField.vue';
import PlusIcon from '~/components/icons/PlusIcon.vue';
import { useRightSidebarFullPanelStore } from '~/stores/useRightSidebarFullPanelStore.js';
import VerticalStepper from '~/components/selections/VerticalStepper.vue';
import BaseIconResolver from '~/components/containments/BaseIconResolver.vue';
import isEmpty from 'lodash/isEmpty';
import FolderOpenIcon from '~/components/icons/FolderOpenIcon.vue';
import SelectField from '~/components/controls/SelectField.vue';
import ArrowLeftFromLineIcon from '~/components/icons/ArrowLeftFromLineIcon.vue';
import DialogModal from '~/components/containments/DialogModal.vue';
import AddFoldersForm from '~/components/forms/AddFoldersForm.vue';
import { useAppBreakpoints } from '~/composables/utils/useAppBreakpoints.js';

const { data: types } = await useListTypesService();
const { icon } = useLibraryType();
const $store = useRightSidebarFullPanelStore();
const { expanded } = storeToRefs($store);
const { isMobile } = useAppBreakpoints();

const form = reactive({
  name: '',
  slug: '',
  description: '',
  folders: [],
  advanced: {
    visibility: 'visible,searchable',
    scanner: '',
  },
  type: undefined,
});

const sections = reactive([
  {
    title: 'General',
    value: 'general',
    icon: 'NotebookTextIcon',
    required: true,
    description: 'Name the library and choose what type of contents it would have.',
  },
  {
    title: 'Folders',
    value: 'folders',
    icon: 'FoldersIcon',
    required: true,
    description: 'Add folders to the library.',
  },
  {
    title: 'Advanced',
    value: 'advanced',
    icon: 'SlidersHorizontalIcon',
    description: 'Tweak settings to customize how the library displays content.',
  },
]);

const onSubmit = () => {
  console.log(12, 'submit', form);
};
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <BaseButton class="w-sm p-1" size="xs" v-bind="$attrs" variant="ghost" @click="$store.show">
    <PlusIcon height="14" width="14" />
  </BaseButton>

  <ClientOnly>
    <Teleport to="[data-portal=right-sidebar-full-panel]">
      <BaseCard
        class="relative flex flex-col h-screen shadow-none border-none overflow-y-auto dark:bg-background"
      >
        <BaseCardHeader class="justify-between sticky top-0 z-50 bg-background border-b">
          <div class="flex gap-4 items-center">
            <PackagePlusIcon class="size-5" />
            <span>Add Library</span>
          </div>
          <div class="flex items-center gap-2">
            <BaseButton
              v-if="!isMobile"
              class="p-1 size-[28px]"
              size="xs"
              variant="ghost"
              @click="$store.expand"
            >
              <ArrowLeftFromLineIcon
                :class="expanded && 'rotate-180'"
                class="size-4 transition-all"
              />
            </BaseButton>
            <BaseButton class="p-1 size-[28px]" size="xs" variant="ghost" @click="$store.hide">
              <CloseIcon class="size-4" />
            </BaseButton>
          </div>
        </BaseCardHeader>
        <BaseCardContent class="flex-1 pl-2.5 md:pl-2.5">
          <VerticalStepper :items="sections" class="max-w-full">
            <template v-slot:[`item.title`]="{ item }">
              {{ item.title
              }}<span v-if="item.required" class="text-red-600 text-sm dark:text-red-400 font-serif"
                >*</span
              >
            </template>
            <template v-slot:[`item.value`]="{ item }">
              <BaseIconResolver :icon="item.icon" class="size-4" />
            </template>
            <template v-slot:[`item.description`]="{ item, index, goToIndex }">
              <div class="mb-4" v-html="item.description" />
              <template v-if="item.value === 'general'">
                <TextField v-model="form.name" label="Name" required />
                <TextField v-model="form.slug" label="Slug" required />
                <TextareaField v-model="form.description" label="Description" />
                <ItemSelectField
                  v-model="form.type"
                  :items="types"
                  label="Select media type"
                  required
                >
                  <template v-slot:[`item.title`]="{ item: field }">
                    <component :is="icon(field.code)" class="mx-auto" />
                    <span>{{ field.title }}</span>
                  </template>
                </ItemSelectField>

                <div class="flex gap-3 w-full justify-end">
                  <BaseButton
                    class="min-w-20"
                    size="sm"
                    variant="primary"
                    @click.stop="goToIndex(index + 1)"
                    >Next
                  </BaseButton>
                </div>
              </template>
              <template v-if="item.value === 'folders'">
                <template v-if="isEmpty(form.folders)">
                  <BaseCard
                    class="p-4 gap-4 text-neutral-500 shadow-none my-4 text-center items-center"
                  >
                    <div class="flex flex-col text-center items-center">
                      <FolderOpenIcon class="size-20" />
                      <span>No folders added yet.</span>
                    </div>
                    <DialogModal>
                      <template v-slot:activator="{ prop }">
                        <BaseButton size="sm" v-bind="prop" variant="filled">
                          <PlusIcon class="size-4" />
                          Add folder
                        </BaseButton>
                      </template>
                      <template v-slot:default="{ close }">
                        <AddFoldersForm @click:cancel="close" />
                      </template>
                    </DialogModal>
                  </BaseCard>
                </template>
                <div class="flex gap-3 w-full justify-end">
                  <BaseButton size="sm" variant="filled" @click.stop="goToIndex(index - 1)"
                    >Previous
                  </BaseButton>
                  <BaseButton
                    class="min-w-20"
                    size="sm"
                    variant="primary"
                    @click.stop="goToIndex(index + 1)"
                    >Next
                  </BaseButton>
                </div>
              </template>
              <template v-if="item.value === 'advanced'">
                <SelectField
                  v-model="form.advanced.visibility"
                  :items="[
                    {
                      title: 'Include in home and global search results',
                      value: 'visible,searchable',
                      attrs: { selected: true },
                    },
                    { title: 'Include in home only', value: 'visible' },
                    { title: 'Include in search results only', value: 'searchable' },
                  ]"
                  label="Visibility"
                  required
                />
                <SelectField
                  v-model="form.advanced.scanner"
                  :items="[
                    { title: 'Choose scanner', value: '', attrs: { selected: true } },
                    {
                      title: 'TODO: fetch from api',
                      value: 'visible,searchable',
                    },
                    { title: 'TheMovieDB', value: '1' },
                    { title: 'TheTVDB', value: '2' },
                    { title: 'ThePosterDB', value: '3' },
                    { title: 'Comicvine', value: '4' },
                  ]"
                  label="Scanner"
                  required
                />
                <SelectField
                  v-model="form.advanced.scanner"
                  :items="[
                    { title: 'Choose sorting', value: '', attrs: { selected: true } },
                    {
                      title: 'Latest first',
                      value: '2',
                    },
                    { title: 'Oldest first', value: '1' },
                  ]"
                  label="Issues sorting"
                  required
                />
                <div class="flex gap-3 w-full justify-end">
                  <BaseButton size="sm" variant="filled" @click.stop="goToIndex(index - 1)"
                    >Previous
                  </BaseButton>
                </div>
              </template>
            </template>
          </VerticalStepper>
        </BaseCardContent>
        <BaseCardContent class="flex justify-end gap-4 border-t sticky bottom-0 bg-background p-3">
          <BaseButton variant="filled" @click="$store.hide">Cancel</BaseButton>
          <BaseButton class="min-w-20" variant="primary">Save Library</BaseButton>
        </BaseCardContent>
      </BaseCard>
    </Teleport>
  </ClientOnly>
</template>
