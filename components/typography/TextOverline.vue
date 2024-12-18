<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <span :class="useMergeClasses(['text-xs uppercase'], $attrs.class)">
    <slot />
  </span>
</template>
