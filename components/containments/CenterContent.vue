<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="
      useMergeClasses([
        'flex flex-col flex-1 h-screen inset-0 align-middle items-center place-content-center',
      ])
    "
    data-component="center-content"
  >
    <slot />
  </div>
</template>
