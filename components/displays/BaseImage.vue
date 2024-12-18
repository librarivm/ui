<script setup>
/**
 * @typedef { 'auto' | 'square' | 'video' | 'poster' } BaseImageAspectRatioType
 */

import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $props = defineProps({
  /** @type import('vue').PropType<BaseImageAspectRatioType> */
  aspectRatio: { type: String, default: 'auto' },
});

const aspectRatio = computed(() => `aspect-${$props.aspectRatio}`);
</script>

<template>
  <img
    :alt="$attrs.alt"
    :class="
      useMergeClasses(
        ['max-w-xl max-h-lg', 'object-cover object-bottom', aspectRatio],
        $attrs.class
      )
    "
    :src="$attrs.src"
    data-component="base-image"
    v-bind="$attrs"
  />
</template>
