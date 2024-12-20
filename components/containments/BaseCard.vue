<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

defineProps({
  disabled: Boolean,
});
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
          disabled && 'opacity-85 select-none text-neutral-500',
        ],
        $attrs.class
      )
    "
    data-component="base-card"
  >
    <slot />
  </div>
</template>
