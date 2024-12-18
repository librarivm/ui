<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
</script>

<template>
  <article
    :class="useMergeClasses(['page-body', 'prose max-w-none'], $attrs.class)"
    data-component="page-body"
  >
    <slot />
  </article>
</template>
