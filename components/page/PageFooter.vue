<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
</script>

<template>
  <footer
    :class="useMergeClasses([
      'footer',
      'flex items-center',
      'h-base',
      'p-4',
    ], $attrs.class)"
    data-component="page-footer"
  >
    <slot>f</slot>
  </footer>
</template>
