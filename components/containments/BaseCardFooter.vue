<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="
      useMergeClasses(
        ['flex gap-4 justify-end items-center p-4 md:p-5 pt-0 md:pt-0 font-bold'],
        $attrs.class
      )
    "
  >
    <slot />
  </div>
</template>
