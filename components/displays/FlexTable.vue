<script setup>
import { useItemsProps } from '~/composables/props/useItemsProps.js';
import { useTextAlignCreditsStyle } from '../../composables/utils/useTextAlignCreditsStyle.js';

const $props = defineProps({
  ...useItemsProps(),
  width: { type: Number, default: 110 },
});

const entries = computed(() =>
  Object.values($props.items || []).map((item) => ({
    raw: item,
    title: item?.[$props.itemTitle] ?? item,
    value: item?.[$props.itemValue] ?? item,
  }))
);
</script>

<template>
  <div class="block font-mono" data-component="flex-table">
    <slot>
      <template v-for="(item, i) in entries" :key="i">
        <div class="flex leading-normal">
          <div :style="`flex: 0 0 ${width}px;`" class="mr-1 shrink-0 gap-0 font-bold text-nowrap">
            <slot name="item.title" v-bind="{ item, key: i }">
              <div class="font-normal mb-1">
                {{ useTextAlignCreditsStyle(item.title, 18) }}&nbsp;
              </div>
            </slot>
          </div>
          <div>
            <slot name="item.value" v-bind="{ item, key: i }">
              {{ item.value }}
            </slot>
          </div>
        </div>
      </template>
    </slot>
  </div>
</template>
