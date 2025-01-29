<script setup>
import { useVariantType } from '~/composables/types/useVariantType.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

defineProps({
  /**
   * @typedef { 'input' | 'textarea' | 'select' } InputFieldType
   * @type import('vue').PropType<InputFieldType> */
  field: { type: String, default: 'input' },
});

const model = defineModel({ type: String, default: undefined });
const { variants } = useVariantType();
const classes = [
  'shrink-0 py-2 px-3 flex space-y-4 rounded-lg',
  'border border-neutral-300 dark:border-neutral-400',
  'dark:placeholder-neutral-500',
  variants.filled,
  'focus:outline-none focus:ring-1 focus:ring-neutral-900',
];
</script>

<template>
  <input
    v-if="field === 'input'"
    v-model="model"
    :class="useMergeClasses(classes, $attrs.class)"
    v-bind="$attrs"
  />
  <textarea
    v-else-if="field === 'textarea'"
    v-model="model"
    :class="useMergeClasses(classes, $attrs.class)"
    class="min-h-11"
    v-bind="$attrs"
  />
  <select
    v-else-if="field === 'select'"
    v-model="model"
    :class="useMergeClasses(classes, $attrs.class)"
    v-bind="$attrs"
  >
    <slot />
  </select>
</template>
