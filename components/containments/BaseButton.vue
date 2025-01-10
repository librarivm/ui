<script setup>
import { useMergeClasses } from '~/composables/utils/useMergeClasses';
import { useVariantType } from '~/composables/types/useVariantType.js';
import { useSizeTypes } from '~/composables/types/useSizeType.js';
import { useLinkProps } from '~/composables/props/useLinkProps.js';

const { variants } = useVariantType();
const { sizes } = useSizeTypes();

const $props = defineProps({
  ...useLinkProps(),
  active: Boolean,
  loading: Boolean,
  /** @type import('vue').PropType<ButtonSizeType> */
  size: { type: String, default: 'md' },
  /** @type import('vue').PropType<ButtonVariantType> */
  variant: { type: String, default: 'default' },
});

const size = computed(() => sizes[$props.size]);
const variant = computed(() => variants[$props.variant]);
const textSize = computed(() => sizes[$props.size]);
const href = computed(() => $props.to);
const component = computed(() => (href.value ? resolveComponent('NuxtLink') : 'button'));
</script>

<template>
  <component
    :is="component"
    :class="
      useMergeClasses(
        [
          'min-w-sm',
          'font-bold',
          'flex',
          'align-center',
          'justify-center',
          'cursor-pointer',
          'items-center',
          'focus:outline-none focus:ring-4',
          'disabled:cursor-not-allowed disabled:opacity-65',
          'transition',
          'leading-normal',
          size,
          variant,
          textSize,
          active && 'active',
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
