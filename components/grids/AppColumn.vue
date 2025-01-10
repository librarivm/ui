<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const props = defineProps({
  /** @type import('vue').PropType<ColumnGridType> */
  col: { type: [String, Number], default: 12 },
  /** @type import('vue').PropType<ColumnGridType> */
  xs: { type: [String, Number], default: undefined },
  /** @type import('vue').PropType<ColumnGridType> */
  sm: { type: [String, Number], default: undefined },
  /** @type import('vue').PropType<ColumnGridType> */
  md: { type: [String, Number], default: undefined },
  /** @type import('vue').PropType<ColumnGridType> */
  lg: { type: [String, Number], default: undefined },
  /** @type import('vue').PropType<ColumnGridType> */
  xl: { type: [String, Number], default: undefined },
});

const column = (span) => (span === 'auto' ? 'col-auto' : span ? `col-span-${span}` : '');

const span = computed(() => column(props.col));

const breakpoints = computed(() =>
  ['xs', 'sm', 'md', 'lg', 'xl']
    .map((bp) => {
      const value = props[bp];
      return value ? `${bp}:${column(value)}` : null;
    })
    .filter(Boolean)
);
</script>

<template>
  <div :class="useMergeClasses([span, ...breakpoints], $attrs.class)">
    <slot />
  </div>
</template>
