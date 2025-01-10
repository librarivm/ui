<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="
      useMergeClasses(
        ['card-header', 'py-3 px-4 md:py-4 md:px-5', 'leading-normal font-bold flex items-center'],
        $attrs.class
      )
    "
    data-component="card-header"
  >
    <slot />
  </div>
</template>
