<script setup>
import BaseButton from '~/components/containments/BaseButton.vue';
import EllipsisVerticalIcon from '~/components/icons/EllipsisVerticalIcon.vue';
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useUuid } from '~/composables/utils/useUuid.js';
import { usePlacementProps } from '~/composables/props/usePlacementProps.js';
import BaseList from '~/components/containments/BaseList.vue';
import { useLoadingProps } from '~/composables/props/useLoadingProps.js';
import { useNameProps } from '~/composables/props/useNameProps.js';
import { useFloating } from '~/composables/utils/useFloating.js';
import { useVisibility } from '~/composables/utils/useVisibility.js';
import { onClickOutside } from '@vueuse/core';
import DropdownContainer from '~/components/containments/DropdownContainer.vue';

const $props = defineProps({
  ...useItemsProps(),
  ...usePlacementProps('bottom-end'),
  ...useLoadingProps(),
  ...useNameProps(),
  width: { type: String, default: 'w-40' },
});

const key = ref(`${$props.name || useUuid('-')}-context-menu`);

const menu = ref();
const dropdown = ref();
const button = ref();

const { name, shown, hide, toggle } = useVisibility(key.value);

const { floatingStyles: position } = useFloating(button, dropdown, {
  placement: $props.placement,
});

onClickOutside(menu, () => hide());
</script>

<template>
  <div
    :id="`${name}-container`"
    ref="menu"
    class="relative inline-block shrink-0 w-auto"
    data-component="context-menu"
  >
    <div :id="`${name}-button`" ref="button" data-component="context-menu-button">
      <slot name="activator">
        <BaseButton class="rounded p-1 size-6" size="xs" variant="ghost" @click="toggle">
          <EllipsisVerticalIcon class="size-4" />
        </BaseButton>
      </slot>
    </div>
    <Teleport to="body">
      <DropdownContainer
        v-if="shown"
        :id="`${name}-dropdown`"
        ref="dropdown"
        :class="[placement, width]"
        :data-key-name="name"
        :style="position"
        class="my-3"
        data-component="context-menu-dropdown"
      >
        <BaseList :items="items" :loading="loading" />
      </DropdownContainer>
    </Teleport>
  </div>
</template>
