<script setup>
import MainNavigationSidebar from '~/components/navigations/MainNavigationSidebar.vue';
import MainContentWindow from '~/components/containments/MainContentWindow.vue';
import { useAppMenus } from '~/menus/useAppMenus.js';

await useAppMenus();
</script>

<template>
  <div id="app" class="min-h-screen overflow-x-hidden" data-layout="default">
    <slot name="sidebar">
      <MainNavigationSidebar />
    </slot>

    <MainContentWindow>
      <slot />
    </MainContentWindow>
  </div>
</template>
