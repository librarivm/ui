<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="
      useMergeClasses(
        [
          'flex flex-col',
          'overflow-hidden',
          'shadow-sm',
          'rounded-md',
          'border border-neutral-100',
          'bg-background',
          'focus:outline-none focus:ring-2 focus:ring-neutral-300',
        ],
        $attrs.class
      )
    "
    data-component="base-card"
  >
    <slot />
  </div>
</template>
