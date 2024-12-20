<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';

/**
 * @typedef { 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' } PageHeadingType
 */

const $props = defineProps({
  /** @type import('vue').PropType<PageHeadingType> */
  type: { type: String, default: 'h1' },
});

const types = {
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base',
};

const variant = computed(() => types[$props.type]);
</script>

<template>
  <component
    :is="type"
    :class="useMergeClasses(['font-bold', 'font-serif', variant], $attrs.class)"
  >
    <slot />
  </component>
</template>
