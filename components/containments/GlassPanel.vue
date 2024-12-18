<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="
      useMergeClasses(
        [
          'relative',
          'after:content-[\'\'] after:absolute',
          'after:w-full after:h-full after:opacity-[0.025] after:-z-[1]',
          'after:bg-[url(/img/textures/noise.svg)] after:bg-repeat after:left-0',
          'bg-background/60 backdrop-blur-sm',
        ],
        $attrs.class
      )
    "
    data-component="glass-panel"
  >
    <slot />
  </div>
</template>
