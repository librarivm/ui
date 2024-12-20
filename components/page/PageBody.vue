<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
import PageArticle from '~/components/page/PageArticle.vue';
</script>

<template>
  <PageArticle
    :class="
      useMergeClasses(
        ['page-body', 'prose max-w-none dark:text-background-foreground'],
        $attrs.class
      )
    "
    data-component="page-body"
  >
    <slot />
  </PageArticle>
</template>
