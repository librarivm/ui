<script setup>
import BaseList from '~/components/containments/BaseList.vue';
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useSecondarySidebarMenus } from '~/composables/menus/useSecondarySidebarMenus.js';

defineProps({
  ...useItemsProps(),
});

const { menus, onMenuClick } = useSecondarySidebarMenus();
const { loading, collapsed } = storeToRefs(useMainNavigationSidebarStore());
</script>

<template>
  <BaseList
    :collapsed="collapsed"
    :items="menus"
    :link-props="{
      class: 'rounded-lg',
    }"
    :loading="loading"
    :tooltip="collapsed"
    @click:item="onMenuClick"
  />
</template>
