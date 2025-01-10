<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="
      useMergeClasses(
        [
          'card-footer',
          'py-3 px-4 md:py-4 md:px-5',
          'flex gap-4 justify-end items-center font-bold',
        ],
        $attrs.class
      )
    "
    data-testid="card-footer"
  >
    <slot />
  </div>
</template>
