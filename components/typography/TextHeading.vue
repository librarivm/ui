<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <h1 :class="useMergeClasses(['text-xl font-bold'], $attrs.class)">
    <slot />
  </h1>
</template>
