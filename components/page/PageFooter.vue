<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';

const { app } = useRuntimeConfig();
</script>

<template>
  <footer
    :class="useMergeClasses(['footer', 'flex gap-4 items-center', 'h-base', 'p-4'], $attrs.class)"
    data-component="page-footer"
  >
    <slot name="prepend" />
    <slot>
      <span class="flex-1 text-center text-xs text-neutral-400">
        {{ app.name }} v{{ app.version || '0.1' }}
      </span>
    </slot>
    <slot name="append" />
  </footer>
</template>
