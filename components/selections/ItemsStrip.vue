<script setup>
/**
 * @typedef { 'auto' | number } ItemsStripScrollByType
 */

import TextSubheading from '~/components/typography/TextSubheading.vue';
import BaseButton from '~/components/containments/BaseButton.vue';
import ChevronLeftIcon from '~/components/icons/ChevronLeftIcon.vue';
import ChevronRightIcon from '~/components/icons/ChevronRightIcon.vue';
import { useItemProp } from '~/composables/props/useItemProp.js';

const $props = defineProps({
  ...useItemProp(),
  label: { type: String, default: null },
  /** @type import('vue').PropType<ItemsStripScrollByType> */
  scrollBy: { type: [String, Number], default: 'auto' },
  container: Boolean,
  centerOnActive: { type: Boolean, default: true },
});

const strip = ref();

/** @param {'right' | 'left'} direction */
const scroll = (direction = 'right') => {
  const scrollBy = $props.scrollBy === 'auto' ? strip.value.clientWidth : $props.scrollBy;
  strip.value.scrollBy({
    left: scrollBy * (direction === 'left' ? -1 : 1),
    behavior: 'smooth',
  });
};

const prop = {
  onClick: (e) => {
    console.log(12, e);
  },
};
</script>

<template>
  <div class="flex flex-col gap-3 overflow-visible" data-component="items-strip">
    <div :class="[{ 'px-4 sm:px-6 lg:px-8': container }]" class="flex justify-between">
      <template v-if="$slots.label">
        <TextSubheading>
          <slot name="label" />
        </TextSubheading>
      </template>
      <TextSubheading v-else-if="label">{{ label }}</TextSubheading>

      <div class="flex gap-1">
        <slot name="controls" v-bind="{ scroll, scrollBy }">
          <BaseButton size="xs" variant="ghost" @click="scroll('left')">
            <ChevronLeftIcon />
          </BaseButton>
          <BaseButton size="xs" variant="ghost" @click="scroll('right')">
            <ChevronRightIcon />
          </BaseButton>
        </slot>
      </div>
    </div>

    <div
      v-if="$slots.text"
      :class="[{ 'px-4 sm:px-6 lg:px-8': container }]"
      class="text-neutral-500"
    >
      <slot name="text" />
    </div>

    <div
      ref="strip"
      class="items-strip flex gap-3 align-middle p-1 overflow-x-auto whitespace-nowrap"
    >
      <div
        v-if="container"
        :class="[{ 'w-[0.25rem] sm:w-3 lg:w-4.5': container }]"
        class="shrink-0"
      />
      <slot v-bind="{ prop, items }">
        <slot name="prepend" v-bind="{ prop, items }" />
        <template v-for="(item, i) in items" :key="i">
          <slot name="item" v-bind="{ item, index: i, items, prop }" />
        </template>
        <slot name="append" v-bind="{ prop, items }" />
      </slot>
      <div
        v-if="container"
        :class="[{ 'w-[0.25rem] sm:w-3 lg:w-4.5': container }]"
        class="shrink-0"
      />
    </div>
  </div>
</template>

<style lang="postcss">
.items-strip {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
