<script setup>
import BrandLogoMark from '~/components/brand/BrandLogoMark.vue';

const { app } = useRuntimeConfig();

const { expanded } = storeToRefs(useMainNavigationSidebarStore());
</script>

<template>
  <div class="flex gap-2 text-primary dark:text-white items-center">
    <BrandLogoMark class="shrink-0 w-9" />
    <span v-if="expanded" class="font-bold leading-none font-serif text-sm">{{ app.name }}</span>
  </div>
</template>
