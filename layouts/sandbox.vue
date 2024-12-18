<script setup>
import MainNavigationSidebar from '~/components/navigations/MainNavigationSidebar.vue';
import MainContentWindow from '~/components/containments/MainContentWindow.vue';
import { useSandboxMenus } from '~/menus/useSandboxMenus.js';

useSandboxMenus();
</script>

<template>
  <div id="app" class="min-h-screen overflow-x-hidden" data-layout="sandbox">
    <slot name="sidebar">
      <MainNavigationSidebar />
    </slot>

    <MainContentWindow>
      <slot />
    </MainContentWindow>
  </div>
</template>
