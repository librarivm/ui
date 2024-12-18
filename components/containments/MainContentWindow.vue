<script setup>
import { useMainNavigationSidebarStore } from '~/stores/useMainNavigationSidebarStore.js';
import { usePageHeader } from '~/composables/ui/usePageHeader.js';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const { collapsed, shown } = storeToRefs(useMainNavigationSidebarStore());

const $header = usePageHeader();

const $breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanMd = $breakpoints.smaller('md');
</script>

<template>
  <div
    :class="[
      smallerThanMd ? 'pl-0' : shown ? (collapsed ? 'pl-[64px]' : 'pl-[320px]') : 'pl-0',
      $header.fixed && 'pt-[60px]',
    ]"
    class="h-screen overflow-y-scroll w-full transition-all flex flex-col bg-background text-background-foreground"
    data-component="main-content-window"
  >
    <slot />
  </div>
</template>
