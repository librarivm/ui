<script setup>
import ShadowScrim from '~/components/containments/ShadowScrim.vue';
import { useRightSidebarFullPanelStore } from '~/stores/useRightSidebarFullPanelStore.js';

const $store = useRightSidebarFullPanelStore();
const { shown, hidden, expanded, condensed } = storeToRefs($store);
</script>

<template>
  <div
    :class="[
      {
        'right-[-100%]': hidden,
        'right-0': shown,
      },
      expanded && 'md:w-4/5',
      condensed && 'md:w-[520px]',
    ]"
    class="w-full shadow-xl fixed z-[53] flex flex-col transition-all top-0 h-screen overflow-x-hidden overflow-y-auto bg-background"
    data-component="right-sidebar-full-panel"
  >
    <div
      class="relative h-screen overflow-x-hidden overflow-y-auto"
      data-portal="right-sidebar-full-panel"
    >
      <slot />
    </div>
  </div>
  <ShadowScrim :active="shown" @close="$store.hide" />
</template>
