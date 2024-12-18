<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
import BackButton from '~/components/navigations/BackButton.vue';
import MainNavigationSidebarToggle from '~/components/navigations/MainNavigationSidebarToggle.vue';
import GlassPanel from '~/components/containments/GlassPanel.vue';
import { useMainNavigationSidebarStore } from '~/stores/useMainNavigationSidebarStore.js';
import { usePageHeader } from '~/composables/ui/usePageHeader.js';
import ThemeSwitcher from '~/components/displays/ThemeSwitcher.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';

const $props = defineProps({
  back: Boolean,
  fixed: { type: Boolean, default: true },
});

const { collapsed, shown } = storeToRefs(useMainNavigationSidebarStore());

usePageHeader().fix($props.fixed);

const $breakpoints = useBreakpoints(breakpointsTailwind);
const smallerThanMd = $breakpoints.smaller('md');
</script>

<template>
  <header
    :class="
      useMergeClasses(
        [
          'footer',
          'flex items-center gap-4',
          'h-base',
          fixed && 'fixed top-0 left-0 w-[calc(100%-15px)] transition-all',
          fixed && (shown ? (collapsed ? 'pl-[64px]' : 'pl-[320px]') : 'pl-0'),
          fixed && smallerThanMd && 'pl-0 w-full',
        ],
        $attrs.class
      )
    "
    data-component="page-header"
  >
    <GlassPanel :class="[fixed && 'border-b']" class="w-full h-base flex items-center gap-4 p-4">
      <slot name="prepend">
        <MainNavigationSidebarToggle />
        <BackButton v-if="back" />
      </slot>

      <div class="flex-1">
        <slot />
      </div>

      <slot name="append">
        <ThemeSwitcher />
      </slot>
    </GlassPanel>
  </header>
</template>
