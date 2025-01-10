<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';
import { useLinkProps } from '~/composables/props/useLinkProps.js';
import isNil from 'lodash/isNil';
import AppLink from '~/components/navigations/AppLink.vue';

const $props = defineProps({
  ...useLinkProps(),
  disabled: Boolean,
});

const link = computed(() => $props.to || $props.href);
const component = computed(() => (isNil($props.to || $props.href) ? 'div' : AppLink));
const isLink = computed(() => !isNil($props.to || $props.href));
</script>

<template>
  <component
    :is="component"
    :class="
      useMergeClasses(
        [
          'not-prose',
          'flex flex-col',
          'overflow-hidden',
          'shadow',
          'rounded-lg',
          'border border-neutral-200',
          'bg-background',
          'text-neutral-800',
          disabled && 'opacity-85 select-none text-neutral-500',
          isLink &&
            'hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-700 no-underline hover:no-underline',
          'dark:bg-gray-800 dark:border-gray-700',
        ],
        $attrs.class
      )
    "
    :disabled="disabled"
    :to="link"
    data-component="base-card"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
