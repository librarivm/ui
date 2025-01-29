<script setup>
import MainContent from '~/components/containments/MainContent.vue';
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import { useLibraryService } from '~/composables/services/library/useLibraryService.js';
import DataTable from '~/components/displays/DataTable.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import PencilIcon from '~/components/icons/PencilIcon.vue';
import SearchIcon from '~/components/icons/SearchIcon.vue';
import ContextMenu from '~/components/selections/ContextMenu.vue';
import { useLibraryType } from '~/composables/types/useLibraryType.js';
import FormattedDate from '~/components/displays/FormattedDate.vue';
import AppLink from '~/components/navigations/AppLink.vue';
import PlusIcon from '~/components/icons/PlusIcon.vue';
import SearchField from '~/components/controls/SearchField.vue';

definePageMeta({
  name: 'libraries.index',
});

const $service = useLibraryService();

await $service.list();
const { headers, selected, items, loading, metadata, $context } = $service;
const { menus } = $context;

const { icon } = useLibraryType();

$service.on('query:changed', async () => $service.list());
</script>

<template>
  <PageHeader title="Libraries" />

  <MainContent>
    <AppContainer>
      <AppGrid>
        <AppColumn>
          <PageTitle class="mb-8 text-neutral-400 dark:text-neutral-600 font-normal" type="h3">
            All Libraries
            <BaseButton size="sm" variant="primary">
              <PlusIcon class="size-4" />
              Add Library
            </BaseButton>
          </PageTitle>

          <AppGrid>
            <AppColumn col="8" md="4">
              <SearchField class="inline-block w-full mb-4" placeholder="Search libraries" />
            </AppColumn>
          </AppGrid>

          <DataTable
            v-model:selected="selected"
            :current="metadata.current"
            :headers="headers"
            :items="items"
            :loading="loading"
            :per-page="metadata.per_page"
            :total="155"
            class="shadow"
            item-value="id"
            selectable
          >
            <template v-slot:[`item.title`]="{ item }">
              <AppLink
                :to="{ name: 'libraries.show', params: { library: item.slug } }"
                class="flex items-center gap-3"
              >
                <component :is="icon(item.type)" class="size-4" />
                <span>{{ item.title }}</span>
              </AppLink>
            </template>
            <template v-slot:[`item.created_at`]="{ item }">
              <FormattedDate class="text-nowrap">{{ item.created_at }}</FormattedDate>
            </template>
            <template v-slot:[`item.updated_at`]="{ item }">
              <FormattedDate class="text-nowrap">{{ item.updated_at }}</FormattedDate>
            </template>
            <template v-slot:[`item.actions`]="{ item, index }">
              <div class="flex gap-2 justify-end items-center">
                <BaseButton class="rounded px-2" size="xs" variant="ghost">
                  <PencilIcon class="size-4 mr-1" />
                  <span>Edit</span>
                </BaseButton>
                <BaseButton
                  :to="{ name: 'libraries.show', params: { library: item.slug } }"
                  class="rounded px-2"
                  size="xs"
                  variant="ghost"
                >
                  <SearchIcon class="size-4 mr-1" />
                  <span>View</span>
                </BaseButton>
                <ContextMenu :items="menus" :name="item.id">
                  <template v-slot:link="{ item }">
                    <span>{{ item.title }}</span>
                  </template>
                </ContextMenu>
              </div>
            </template>
          </DataTable>
        </AppColumn>
      </AppGrid>
    </AppContainer>
  </MainContent>

  <PageFooter />
</template>
