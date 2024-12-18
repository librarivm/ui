<script setup>
import { useItemProp } from '~/composables/props/useItemProp.js';

const $props = defineProps({
  ...useItemProp(),
  width: { type: Number, default: 110 },
});

const entries = computed(() =>
  ($props.items || []).map((item) => ({
    raw: item,
    title: item?.[$props.itemTitle] ?? item,
    value: item?.[$props.itemValue] ?? item,
  }))
);
</script>

<template>
  <div class="block" data-component="flex-table">
    <slot>
      <template v-for="(item, i) in entries" :key="i">
        <div class="flex leading-tight">
          <div :style="`flex: 0 0 ${width}px;`" class="mr-4 shrink-0 text-nowrap">
            <slot name="item.title" v-bind="{ item, key: i }">
              <div class="font-weight-bold mb-1">{{ item.title }}</div>
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
