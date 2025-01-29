<script setup>
import { ref } from 'vue';
import { usePlacementProps } from '~/composables/props/usePlacementProps.js';
import { useVisibility } from '~/composables/utils/useVisibility.js';
import { useUuid } from '~/composables/utils/useUuid.js';
import { useNameProps } from '~/composables/props/useNameProps.js';
import { useDisabledProps } from '~/composables/props/useDisabledProps.js';
import { useFloating } from '~/composables/utils/useFloating.js';

const $props = defineProps({
  ...usePlacementProps(),
  ...useNameProps(),
  ...useDisabledProps(),
});

const activator = ref();
const tooltip = ref();
const { shown, show, hide, hidden } = useVisibility(`tooltip.${$props.name ?? useUuid('.')}`);

const { floatingStyles: position } = useFloating(activator, tooltip, {
  placement: $props.placement,
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <template v-if="disabled">
    <slot name="activator" v-bind="{ shown, hidden, show, hide }" />
  </template>
  <div
    v-else
    class="relative transition"
    data-component="base-tooltip"
    @blur="hide"
    @focus="show"
    @mouseenter="show"
    @mouseleave="hide"
  >
    <div ref="activator">
      <slot name="activator" v-bind="{ shown, hidden, show, hide }" />
    </div>
    <span
      v-if="shown"
      ref="tooltip"
      :style="position"
      class="transition-opacity z-[800] absolute py-1 px-3 text-xs rounded text-nowrap font-sans bg-neutral-900 text-neutral-100"
      role="tooltip"
      v-bind="$attrs"
    >
      <slot />
    </span>
  </div>
</template>
