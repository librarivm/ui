<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

defineProps({
  color: { type: String, default: 'bg-black/40' },
});
</script>

<template>
  <div
    :class="
      useMergeClasses(
        ['fixed', 'top-0 left-0 right-0 bottom-0', 'w-screen h-screen', 'z-20', color],
        $attrs.class
      )
    "
    data-component="shadow-scrim"
  >
    <slot />
  </div>
</template>
