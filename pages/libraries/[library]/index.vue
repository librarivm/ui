<script setup>
import MainContent from '~/components/containments/MainContent';
import MediaMainWindow from '~/components/media/MediaMainWindow.vue';
import PageHeader from '~/components/page/PageHeader.vue';
import PageFooter from '~/components/page/PageFooter.vue';
import { useGetLibraryService } from '~/composables/services/library/useGetLibraryService.js';

const { loading, data, type } = await useGetLibraryService();

definePageMeta({
  name: 'libraries.show',
});
</script>

<template>
  <PageHeader />

  <MainContent>
    <MediaMainWindow :data="data" :loading="loading" :type="type" />
  </MainContent>

  <PageFooter />
</template>
