<script setup>
import { useLibraryType } from '~/composables/types/useLibraryType.js';
import MediaTypeUnsupportedWindow from '~/components/media/MediaTypeUnsupportedWindow.vue';
import BaseNavigationTabs from '~/components/navigations/BaseNavigationTabs.vue';

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
    <BaseNavigationTabs v-if="data?.metadata?.sections" :items="data.metadata.sections" />

    <component :is="component(library)" :data="data" />
  </template>
</template>
