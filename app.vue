<script setup>
import { useDark } from '@vueuse/core';

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
  </NuxtLayout>
</template>
