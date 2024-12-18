<script setup>
/**
 * @typedef { 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success' | 'ghost' | 'default' } ButtonVariantType
 * @typedef { 'xs' | 'sm' | 'md' | 'lg' | 'xl' } ButtonSizeType
 */

import { useMergeClasses } from '~/composables/utils/useMergeClasses';

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-secondary/50',
  danger:
    'bg-danger text-danger-foreground hover:bg-danger/80 focus:outline-none focus:ring-2 focus:ring-danger/50',
  warning:
    'bg-warning text-warning-foreground hover:bg-warning/80 focus:outline-none focus:ring-2 focus:ring-warning/50',
  info: 'bg-info text-info-foreground hover:bg-info/80 focus:outline-none focus:ring-2 focus:ring-info/50',
  success:
    'bg-success text-success-foreground hover:bg-success/80 focus:outline-none focus:ring-2 focus:ring-success/50',
  ghost:
    'bg-transparent text-neutral-800 border-none hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300',
  default:
    'bg-background text-neutral-800 border border-neutral-100 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-neutral-300',
};

const sizes = {
  xs: 'text-xs rounded-md gap-x-0.5 px-2 py-1',
  sm: 'text-sm rounded-lg gap-x-1 px-3 py-2',
  md: 'text-md rounded-lg gap-x-2 px-5 py-2.5',
  lg: 'text-lg rounded-lg gap-x-2.5 px-5 py-3',
  xl: 'text-xl rounded-xl gap-x-3 px-6 py-3.5',
};

const $props = defineProps({
  active: Boolean,

  loading: Boolean,

  /** @type import('vue').PropType<import('vue-router').RouteLocationRaw> */
  to: { type: [String, Object], default: undefined },

  /** @type import('vue').PropType<ButtonSizeType> */
  size: { type: String, default: 'md' },

  /** @type import('vue').PropType<ButtonVariantType> */
  variant: { type: String, default: 'default' },
});

const size = computed(() => sizes[$props.size]);
const variant = computed(() => variants[$props.variant]);
const textSize = computed(() => sizes[$props.size]);
const href = computed(() => $props.to);
// TODO: NuxtLinkLocale
const component = computed(() => (href.value ? resolveComponent('NuxtLink') : 'button'));
</script>

<template>
  <component
    :is="component"
    :class="
      useMergeClasses(
        [
          size,
          variant,
          textSize,
          'min-w-sm',
          'font-500',
          'flex',
          'align-center',
          'justify-center',
          'active:opacity-85',
          'cursor-pointer',
          'items-center',
          'disabled:cursor-not-allowed disabled:opacity-65',
        ],
        $attrs.class
      )
    "
    :disabled="loading"
    :to="href"
    :type="href ? undefined : 'button'"
    v-bind="$attrs"
  >
    <template v-if="loading">
      <slot name="loading">
        <span
          aria-label="loading"
          class="absolute left-8 animate-spin inline-block size-4 border-[2px] border-current border-t-transparent text-background rounded-full"
          role="status"
        />
      </slot>
    </template>
    <template v-else>
      <slot name="prepend" />
    </template>
    <slot />
    <slot name="append" />
  </component>
</template>
