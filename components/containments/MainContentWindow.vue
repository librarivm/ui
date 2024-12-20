<script setup>
import { useMainNavigationSidebarStore } from '~/stores/useMainNavigationSidebarStore.js';
import { useAppBreakpoints } from '~/composables/utils/useAppBreakpoints.js';

const { collapsed, shown } = storeToRefs(useMainNavigationSidebarStore());
const { isMobile } = useAppBreakpoints();
</script>

<template>
  <div
    :class="[isMobile ? 'pl-0' : shown ? (collapsed ? 'pl-[64px]' : 'pl-[320px]') : 'pl-0']"
    class="h-screen overflow-y-scroll bg-workspace w-full transition-all flex flex-col text-background-foreground"
    data-component="main-content-window"
  >
    <slot />
  </div>
</template>
