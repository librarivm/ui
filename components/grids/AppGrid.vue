<script setup>
/**
 * @typedef { string | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12} RowGridType
 */

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
