<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div :class="useMergeClasses(['flex gap-4 flex-wrap items-start'], $attrs.class)">
    <slot />
  </div>
</template>
