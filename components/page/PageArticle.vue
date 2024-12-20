<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
</script>

<template>
  <article
    :class="
      useMergeClasses(
        [
          'article mx-auto',
          'prose',
          'prose-headings:text-neutral-800 dark:text-background-foreground',
        ],
        $attrs.class
      )
    "
    data-component="page-article"
  >
    <slot />
  </article>
</template>
