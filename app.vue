<script setup>
import { useDark } from '@vueuse/core';
import AppPortal from '~/components/containments/AppPortal.vue';
import RightSidebarFullPanel from '~/components/containments/RightSidebarFullPanel.vue';

const config = useRuntimeConfig();
const route = useRoute();

useDark();

useSeoMeta({
  title: route?.meta?.title || undefined,
});

useHead({
  titleTemplate: (title) => (title ? `${title} - ${config.app.name}` : `${config.app.name}`),
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />

    <RightSidebarFullPanel />
  </NuxtLayout>
  <AppPortal />
</template>
