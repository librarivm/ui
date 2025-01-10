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
          'prose-code:dark:text-background-foreground/80 prose-code:dark:bg-background/80',
          'prose-headings:text-neutral-800 prose-a:dark:text-neutral-800 dark:text-background-foreground',
        ],
        $attrs.class
      )
    "
    data-component="page-article"
  >
    <slot />
  </article>
</template>
