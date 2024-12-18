<script setup>
/**
 * @typedef {'fluid' | 'narrow' | 'comfortable'} WidthType
 */

import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $props = defineProps({
  /** @type import('vue').PropType<WidthType> */
  width: {
    type: String,
    default: 'fluid',
  },
});

const width = computed(() => {
  switch ($props.width) {
    case 'fluid':
      return 'w-full';
    case 'narrow':
      return 'w-full md:w-[640px]';
    case 'comfortable':
    default:
      return 'w-full md:max-w-6xl';
  }
});
</script>

<template>
  <div
    :class="
      useMergeClasses(['container mx-auto', 'p-4 sm:p-6 lg:p-8', 'max-w-full', width], $attrs.class)
    "
    data-component="app-container"
  >
    <slot />
  </div>
</template>
