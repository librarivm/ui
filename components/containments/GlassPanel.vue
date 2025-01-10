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
          'relative transition-all',
          !disabled && 'after:content-[\'\'] after:absolute',
          !disabled && 'after:w-full after:h-full after:opacity-[0.025] after:-z-[1]',
          !disabled && 'after:bg-[url(/img/textures/noise.svg)] after:bg-repeat after:left-0',
          !disabled && 'bg-background/60 backdrop-blur-sm',
        ],
        $attrs.class
      )
    "
    data-component="glass-panel"
  >
    <slot />
  </div>
</template>
