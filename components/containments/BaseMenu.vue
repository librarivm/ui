<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useModelProps } from '~/composables/props/useModelProps.js';
import { useFloating } from '~/composables/utils/useFloating.js';
import { usePlacementProps } from '~/composables/props/usePlacementProps.js';
import BaseList from '~/components/containments/BaseList.vue';
import { onClickOutside } from '@vueuse/core';
import DropdownContainer from '~/components/containments/DropdownContainer.vue';

const $emit = defineEmits(['update:modelValue', 'click:item']);

const model = defineModel('modelValue', false);

const $props = defineProps({
  ...useItemsProps(),
  ...useModelProps(),
  ...usePlacementProps('bottom-end'),
  hideOnClickContent: Boolean,
});

const container = ref();
const activator = ref();
const dropdown = ref();

const { floatingStyles: position } = useFloating(activator, dropdown, {
  placement: $props.placement,
});

const prop = {
  onClick: () => {
    $emit('update:modelValue', !model.value);
  },
};
const onItemClick = (item) => {
  $emit('click:item', item);

  if ($props.hideOnClickContent) {
    $emit('update:modelValue', false);
  }
};

onClickOutside(container, () => $emit('update:modelValue', false));
</script>

<script>
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div ref="container" data-component="base-menu">
    <div ref="activator">
      <slot name="activator" v-bind="{ model, prop }">
        <button
          :aria-expanded="model ? 'true' : 'false'"
          class="z-[51] flex text-sm bg-neutral-800 rounded-full md:me-0 focus:ring-4 focus:ring-neutral-300"
          type="button"
          @click.prevent="prop.onClick"
        >
          <span class="sr-only">Open user menu</span>
          <img
            alt="user photo"
            class="w-8 h-8 rounded-full object-cover border-none"
            src="/tmp/avatar.png"
          />
        </button>
      </slot>
    </div>
    <DropdownContainer
      ref="dropdown"
      :class="[model ? 'visible opacity-1' : 'invisible opacity-0']"
      :style="position"
      class="max-w-[250px]"
      data-component="base-menu-dropdown"
      v-bind="$attrs"
    >
      <slot name="dropdown.prepend" />
      <BaseList :items="items" @click:item="onItemClick" />
      <slot name="dropdown.append" />
    </DropdownContainer>
  </div>
</template>
