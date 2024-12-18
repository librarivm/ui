<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
</script>

<template>
  <main
    id="main"
    :class="useMergeClasses(['main flex-1 h-auto'], $attrs.class)"
    data-component="main-content"
  >
    <slot />
  </main>
</template>
