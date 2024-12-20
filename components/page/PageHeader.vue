<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
import BackButton from '~/components/navigations/BackButton.vue';
import MainNavigationSidebarToggle from '~/components/navigations/MainNavigationSidebarToggle.vue';
import GlassPanel from '~/components/containments/GlassPanel.vue';
import { usePageHeader } from '~/composables/ui/usePageHeader.js';
import ThemeSwitcher from '~/components/displays/ThemeSwitcher.vue';

const $props = defineProps({
  back: Boolean,
  sticky: { type: Boolean, default: true },
});

usePageHeader().stick($props.sticky);
</script>

<template>
  <header
    :class="
      useMergeClasses(
        [
          'header',
          'flex items-center gap-4',
          'h-base',
          'transition-all',
          'z-50',
          sticky && 'sticky top-0 left-0 w-full',
        ],
        $attrs.class
      )
    "
    data-component="page-header"
  >
    <GlassPanel
      :class="[sticky && 'md:border-b']"
      class="w-full h-base flex items-center gap-4 p-4"
    >
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
