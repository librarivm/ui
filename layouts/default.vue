<script setup>
import MainContentWindow from '~/components/containments/MainContentWindow.vue';
import MainNavigationSidebar from '~/components/navigations/MainNavigationSidebar.vue';
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
