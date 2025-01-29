<script setup>
import { useActiveProps } from '~/composables/props/useActiveProps.js';
import debounce from 'lodash/debounce';

const $props = defineProps(useActiveProps(true));

const active = ref($props.active);
watchEffect(
  debounce(() => {
    active.value = $props.active;
  }, 800)
);
</script>

<template>
  <div class="w-full h-[2px] bg-gray-200 dark:bg-gray-800 overflow-hidden">
    <div v-if="active" class="w-full h-full bg-primary animate-progress origin-left-right" />
  </div>
</template>
