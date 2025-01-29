<script setup>
import MainContent from '~/components/containments/MainContent';
import MediaMainWindow from '~/components/media/MediaMainWindow.vue';
import PageHeader from '~/components/page/PageHeader.vue';
import PageFooter from '~/components/page/PageFooter.vue';
import { useLibraryService } from '~/composables/services/library/useLibraryService.js';

definePageMeta({
  name: 'libraries.show',
});

const $route = useRoute();
const $service = useLibraryService();
const { loading, data, type } = $service;

await $service.show($route.params.library);
$service.on('query:changed', () => $service.show($route.params.library));
</script>

<template>
  <PageHeader :title="data?.title" />

  <MainContent>
    <MediaMainWindow :data="data" :loading="loading" :type="type" />
  </MainContent>

  <PageFooter />
</template>
