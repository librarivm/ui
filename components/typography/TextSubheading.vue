<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <h2 :class="useMergeClasses(['text-md font-bold font-serif'], $attrs.class)">
    <slot />
  </h2>
</template>
