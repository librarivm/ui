<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

defineProps({
  /** @type import('vue').PropType<RowGridType> */
  grid: { type: [String, Number], default: 12 },
});
</script>

<template>
  <div
    :class="useMergeClasses(['grid', 'w-full', 'gap-4', grid && `grid-cols-${grid}`], $attrs.class)"
    data-component="app-grid"
  >
    <slot />
  </div>
</template>
