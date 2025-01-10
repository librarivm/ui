<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <span
    :class="
      useMergeClasses(
        ['text-sm', 'flex items-center gap-1 rounded-md bg-black/80 text-white px-2 py-0.5 '],
        $attrs.class
      )
    "
  >
    <slot />
  </span>
</template>
