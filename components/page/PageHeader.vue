<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
import BackButton from '~/components/navigations/BackButton.vue';
import MainNavigationSidebarToggle from '~/components/navigations/MainNavigationSidebarToggle.vue';
import GlassPanel from '~/components/containments/GlassPanel.vue';
import { usePageHeader } from '~/composables/ui/usePageHeader.js';
import { useMainContentWindowScroll } from '~/composables/utils/useMainContentWindowScroll.js';
import UserMenu from '~/components/navigations/UserMenu.vue';

const $props = defineProps({
  back: Boolean,
  toggle: { type: Boolean, default: true },
  sticky: { type: Boolean, default: true },
  title: { type: String, default: undefined },
});

usePageHeader().stick($props.sticky);

const { isTopArrived, isNotAtTop } = useMainContentWindowScroll();
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
      :class="[isNotAtTop && 'border-b']"
      :disabled="isTopArrived"
      class="w-full h-base flex items-center gap-1 px-4 sm:px-6 lg:px-8"
    >
      <slot name="prepend">
        <MainNavigationSidebarToggle v-if="toggle" />
        <BackButton v-if="back" />
        <PageTitle v-if="title" class="text-2xl ml-1">{{ title }}</PageTitle>
      </slot>

      <div class="flex-1">
        <slot />
      </div>

      <slot name="append">
        <UserMenu />
      </slot>
    </GlassPanel>
  </header>
</template>
