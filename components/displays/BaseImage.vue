<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import { useAspectRatioProp } from '~/composables/props/useAspectRatioProp.js';

const $props = defineProps({
  ...useAspectRatioProp(),
});

const aspectRatio = computed(() => `aspect-${$props.aspectRatio}`);
</script>

<template>
  <img
    :alt="$attrs.alt"
    :class="
      useMergeClasses(
        ['max-w-xl max-h-lg rounded-md', 'w-auto object-cover object-bottom', aspectRatio],
        $attrs.class
      )
    "
    :src="$attrs.src"
    data-component="base-image"
    v-bind="$attrs"
  />
</template>
