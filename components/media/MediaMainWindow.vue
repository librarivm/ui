<script setup>
import AppContainer from '~/components/grids/AppContainer.vue';
import AppGrid from '~/components/grids/AppGrid.vue';
import AppColumn from '~/components/grids/AppColumn.vue';
import { useLibraryType } from '~/composables/types/useLibraryType.js';
import MediaTypeUnsupportedWindow from '~/components/media/MediaTypeUnsupportedWindow.vue';

const $props = defineProps({
  type: { type: String, required: true },
  data: { type: Object, required: true },
  loading: Boolean,
});

const { isUnsupportedWindow, component } = useLibraryType();

const library = computed(() => $props.type);
const isUnsupported = computed(() => isUnsupportedWindow(library.value));
</script>

<template>
  <MediaTypeUnsupportedWindow v-if="isUnsupported" />

  <template v-else>
    <AppContainer>
      <AppGrid>
        <AppColumn>
          <PageBody>
            <PageTitle>{{ data.title }}</PageTitle>
          </PageBody>
        </AppColumn>
      </AppGrid>
    </AppContainer>

    <component :is="component(library)" :data="data" />
  </template>
</template>
