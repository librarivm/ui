<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div
    :class="useMergeClasses(['card-content', 'py-3 px-4 md:py-4 md:px-5'], $attrs.class)"
    data-component="card-content"
  >
    <slot />
  </div>
</template>
