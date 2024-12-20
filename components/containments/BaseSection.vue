<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
</script>

<template>
  <section :class="useMergeClasses(['flex flex-col h-auto p-4'], $attrs.class)">
    <slot />
  </section>
</template>
