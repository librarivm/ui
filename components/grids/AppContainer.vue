<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import { useContainerPadding } from '~/composables/ui/useContainerPadding.js';

const $props = defineProps({
  /** @type import('vue').PropType<WidthType> */
  width: {
    type: String,
    default: 'fluid',
  },
});

const width = computed(() => {
  switch ($props.width) {
    case 'fluid':
      return 'w-full';
    case 'narrow':
      return 'w-full md:w-[640px]';
    case 'comfortable':
    default:
      return 'w-full md:max-w-6xl';
  }
});
</script>

<template>
  <div
    :class="
      useMergeClasses(
        ['container mx-auto', 'max-w-full', useContainerPadding(), width],
        $attrs.class
      )
    "
    data-component="app-container"
  >
    <slot />
  </div>
</template>
