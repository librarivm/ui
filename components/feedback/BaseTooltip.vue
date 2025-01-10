<script setup>
import { ref } from 'vue';
import { usePlacementProps } from '~/composables/props/usePlacementProps.js';
import { useVisibilityToggle } from '~/composables/utils/useVisibilityToggle.js';
import { useUuid } from '~/composables/utils/useUuid.js';
import { useMergeClasses } from '~/composables/utils/useMergeClasses.js';

const $props = defineProps({
  ...usePlacementProps(),
  name: { type: String, default: undefined },
  disabled: Boolean,
});

const tooltip = ref(null);
const $service = useVisibilityToggle(`tooltip.${$props.name ?? useUuid('.')}`);
const { shown, hidden } = $service;

const position = (placement) => {
  switch (placement) {
    case 'left.1':
      return 'left-0';
    case 'right.1':
      return 'right-0';
    case 'left.0':
      return 'right-full';
    case 'right.0':
      return 'left-full';
    case 'top.0':
      return 'bottom-full';
    case 'bottom.0':
    default:
      return 'top-full';
  }
};

const placement = computed(() => {
  if ($props.placement.split(' ').length === 1 && ['bottom', 'top'].includes($props.placement)) {
    return [position(`${$props.placement}.0`), '-left-1/2'];
  }

  return $props.placement.split(' ').map((placement, i) => position(`${placement}.${i}`));
});
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <template v-if="disabled">
    <slot name="activator" v-bind="{ shown, hidden, show: $service.show, hide: $service.hide }" />
  </template>
  <div
    v-else
    class="relative transition"
    data-component="base-tooltip"
    @blur="$service.hide"
    @focus="$service.show"
    @mouseenter="$service.show"
    @mouseleave="$service.hide"
  >
    <slot name="activator" v-bind="{ shown, hidden, show: $service.show, hide: $service.hide }" />
    <span
      ref="tooltip"
      :class="
        useMergeClasses([placement, shown && 'opacity-1 visible', hidden && 'opacity-0 invisible'])
      "
      class="transition-opacity z-[800] absolute py-1 px-3 text-xs rounded text-nowrap font-sans bg-primary text-primary-foreground"
      role="tooltip"
      v-bind="$attrs"
    >
      <slot />
    </span>
  </div>
</template>
