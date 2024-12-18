<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <div :class="useMergeClasses(['p-4 md:p-5 font-bold flex items-center'], $attrs.class)">
    <slot />
  </div>
</template>
