<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import { useMainNavigationSidebarStore } from '~/stores/useMainNavigationSidebarStore.js';
import MenuIcon from '~/components/icons/MenuIcon.vue';

const $store = useMainNavigationSidebarStore();
</script>

<template>
  <BaseButton class="w-sm p-1 w-[26px] h-[26px]" size="xs" variant="ghost" @click="$store.rail">
    <MenuIcon class="size-4" />
  </BaseButton>
</template>
